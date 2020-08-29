import { EBMLElementDetail, tools, Decoder, Encoder, MasterElement } from "ts-ebml";
import { EBML, Segment, SimpleBlock, BlockGroup, Cluster } from "./elements";
import { OutputExcludeKeys, MultipleElements } from "./Const";
import { Buffer } from "ts-ebml/lib/tools";

export class EbmlToJson {
    public EBML: EBML;
    public Segment: Segment;

    /**
     * EBMLファイルを読み込み、EBML・Segmentプロパティに設定する
     * @param buffer 
     */
    public constructor(buffer: ArrayBuffer) {
        const decoder = new Decoder();
        const elms: EBMLElementDetail[] = decoder.decode(buffer);

        const toJsonRecursive = (elms: EBMLElementDetail[], json: any, i = 0, parentLevel = -1) => {
            for (i; i < elms.length; i++) {
                const elm = elms[i];
                if ((<any>elm).isEnd === true) {
                    // 終了タグが出てきたら子要素読み込み終わり
                    break;
                }
                if (parentLevel >= elm.level) {
                    // 終了タグが出てこずに、同じ以上のレベルのタグが出てきたら子要素読み込み終わり
                    i--;
                    break;
                }

                if (elm.type === "m") {
                    // MasterElementの子を読み込む
                    i = toJsonRecursive(elms, elm, i + 1, elm.level);
                }

                let propertyName: string;
                if (elm.name === "BlockGroup" || elm.name === "SimpleBlock") {
                    // ブロック要素にtrackNumberとtimecode設定
                    const blockElm = <BlockGroup | SimpleBlock>elm;
                    const blockBuf = elm.name === "BlockGroup" ? (<BlockGroup>blockElm).Block.value : (<SimpleBlock>blockElm).value;
                    const blockData = tools.readBlock(blockBuf);
                    blockElm.trackNumber = blockData.trackNumber;
                    blockElm.timecode = blockData.timecode;
                    propertyName = "blocks";
                }
                else {
                    if (elm.type === "m" && elm.name === "Cluster") {
                        const cluster = <Cluster>elm;

                        // 一つ前のClusterの、最後のブロックのblockDurationを設定する
                        if ((json["Cluster"] || []).length > 0) {
                            const prevCluster = <Cluster>json["Cluster"].slice(-1)[0];
                            if ((prevCluster.blocks || []).length > 0) {
                                const processed: { [trackNumber: number]: boolean } = {}
                                Object.assign([], prevCluster.blocks).reverse().forEach(b => {
                                    const tn = b.trackNumber;   // trackNumberごとに処理
                                    if (!processed[tn]) {
                                        b.blockDuration = cluster.Timecode.value - (prevCluster.Timecode.value + b.timecode);
                                        processed[tn] = true;
                                    }
                                });
                            }
                        }

                        // 各ブロックにblockDurationを設定する
                        if ((cluster.blocks || []).length > 0) {
                            const trackNumbers = [...new Set(cluster.blocks.map(b => b.trackNumber))];
                            for (const tn of trackNumbers) {
                                const blocks = cluster.blocks.filter(b => b.trackNumber == tn);
                                for (let i = 1; i < blocks.length; i++) {
                                    const prevBlock = blocks[i - 1];
                                    prevBlock.blockDuration = blocks[i].timecode - prevBlock.timecode;
                                }
                            }
                        }
                    }

                    propertyName = elm.name;
                }

                if (MultipleElements.indexOf(propertyName) >= 0) {
                    if (json[propertyName] == null) {
                        json[propertyName] = [];
                    }
                    json[propertyName].push(elm);
                }
                else {
                    json[propertyName] = elm;
                }
            }

            return i;
        }

        toJsonRecursive(elms, this);
    }

    /**
     * Json化したEBMLファイルをBlobにして返します。
     * @param codecs 
     */
    public toBlob(codecs: string) {
        const elms = this._jsonToElmArray();
        const encoder = new Encoder();
        const buf = encoder.encode(elms);
        return new Blob([buf], { type: `video/webm; codecs="${codecs}"` });
    }

    /**
     * Json化したEBMLファイルを文字列で出力します。
     */
    public toString() {
        return JSON.stringify({ EBML: this.EBML, Segment: this.Segment }, function (k, v) {
            if (OutputExcludeKeys.includes(k)) {
                return;
            }

            if (v.value instanceof Int8Array ||
                v.value instanceof Uint8Array ||
                v.value instanceof Uint8ClampedArray ||
                v.value instanceof Int16Array ||
                v.value instanceof Uint16Array ||
                v.value instanceof Int32Array ||
                v.value instanceof Uint32Array ||
                v.value instanceof Float32Array ||
                v.value instanceof Float64Array ||
                v.value instanceof BigInt64Array ||
                v.value instanceof BigUint64Array ||
                v.value instanceof ArrayBuffer ||
                v.value instanceof Buffer) {
                v = Object.assign({}, v, { value: `${v.value.constructor.name}(${v.value.byteLength})` });
            }

            const includeKeys = Object.keys(v).filter(k => !OutputExcludeKeys.includes(k));
            if (includeKeys.length == 1 && includeKeys[0] == "value") {
                return v.value;
            }
            else {
                return v
            }
        }, "    ");
    }

    private _jsonToElmArray() {
        const jsonToElmArrayRecursive = (elm: EBMLElementDetail) => {
            const cElm = Object.assign({}, elm);
            const arr: EBMLElementDetail[] = [<any>cElm];
            for (const k of Object.keys(cElm)) {
                if (OutputExcludeKeys.includes(k)) {
                    continue;
                }

                let e = cElm[k];
                if (e != null && (e.type != null || Array.isArray(e))) {
                    const children = Array.isArray(e) ? e : [e];
                    children.forEach(c => {
                        if (c.type === "b") {
                            if (c.value instanceof Array) {
                                c.value = new Buffer(c.value);
                            }
                        }

                        if (c.name === "BlockGroup" || c.name === "SimpleBlock") {
                            const block = c.name === "BlockGroup" ? c.Block : c;
                            const dataBuffer: Buffer = block.value;
                            let offset: number;
                            for (offset = 1; offset <= 8; offset++) {
                                if (dataBuffer[0] >= Math.pow(2, 8 - offset)) break;
                            }
                            dataBuffer.writeInt16BE(c.timecode, offset);
                            block.value = dataBuffer;
                        }

                        if (c.type !== "i") {
                            c = tools.encodeValueToBuffer(c);
                        }
                        else {
                            let bytes = 1;
                            for (; c.value >= Math.pow(2, 8 * bytes - 1); bytes++) { }
                            if (bytes >= 7) {
                                throw "7bit or more bigger uint not supported.";
                            }
                            const data = new Buffer(bytes);
                            data.writeIntBE(c.value, 0, bytes);

                            c.data = data;
                        }

                        arr.push.apply(arr, c.type === "m" ? jsonToElmArrayRecursive(c) : [c]);
                    });

                    delete cElm[k];
                }
            }

            if (!(<MasterElement>cElm).unknownSize) {
                const eElm = Object.assign({}, cElm);
                arr.push(<any>{ ...eElm, isEnd: true });
            }
            return arr;
        }

        return [...jsonToElmArrayRecursive(this.EBML), ...jsonToElmArrayRecursive(this.Segment)];
    }
}