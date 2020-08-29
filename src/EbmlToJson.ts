import { EBMLElementDetail, tools, Decoder, Encoder, MasterElement, BinaryElement } from "ts-ebml";
import { EBML } from "./elements/EBML";
import { Segment } from "./elements/Segment";
import { Cluster, BlockGroup, SimpleBlock } from "./elements/Cluster";

const MultipleElement = ["AttachedFile", "EditionEntry", "ChapterDisplay", "ChapProcess", "ChapterTrackUID",
    "ChapLanguage", "ChapLanguageIETF", "ChapCountry", "ChapProcessCommand", "SimpleBlock", "BlockGroup",
    "EncryptedBlock", "SilentTrackNumber", "ReferenceBlock", "BlockMore", "TimeSlice", "CuePoint",
    "CueTrackPositions", "CueReference", "SegmentFamily", "ChapterTranslate", "ChapterTranslateEditionUID",
    "Cluster", "Tracks", "Tags", "Tag", "SimpleTag", "TagTrackUID", "TagEditionUID", "TagChapterUID",
    "TagAttachmentUID", "TrackEntry", "BlockAdditionMapping", "CodecInfoURL", "CodecDownloadURL", "TrackOverlay",
    "TrackTranslate", "TrackTranslateEditionUID", "TrackPlane", "TrackJoinUID", "ContentEncoding", "blocks"];

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
                    const blockBuf = elm.name === "BlockGroup" ? (<BlockGroup>blockElm).Block.value : (<BinaryElement>blockElm).value;
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

                if (MultipleElement.indexOf(propertyName) >= 0) {
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
        const elms = this.jsonToElmArray();
        const encoder = new Encoder();
        const buf = encoder.encode(elms);
        return new Blob([buf], { type: `video/webm; codecs="${codecs}"` });
    }

    /**
     * Json化したEBMLファイルを文字列で出力します。
     */
    public toString() {
        return JSON.stringify({ EBML: this.EBML, Segment: this.Segment }, function (k, v) {
            if (k == "schema" || v == null) {
                return;
            }

            if (k.length == 0 || Array.isArray(v)) {
                return v;
            }

            if (v.name == "SimpleBlock" || v.name == "BlockGroup") {
                /*
                let ret = `${v.name} ${v.trackNumber} ${v.timecode} ${v.blockDuration}`;
                if (v.ReferenceBlock && v.ReferenceBlock.length > 0) {
                    ret += " " + v.ReferenceBlock[0].value;
                }
                return ret;
                */
                return v;
            }

            if (v.type != null) {
                return v.type === "m" ? v : v.value;
            }
        }, "    ");
    }

    private jsonToElmArray() {
        const jsonToElmArrayRecursive = (elm: EBMLElementDetail) => {
            const cElm = Object.assign({}, elm);
            const arr: EBMLElementDetail[] = [<any>cElm];
            for (const k of Object.keys(cElm)) {
                if (k == "schema") {
                    continue;
                }

                let e = cElm[k];
                if (e != null && (e.type != null || Array.isArray(e))) {
                    const children = Array.isArray(e) ? e : [e];
                    children.forEach(c => {
                        if (c.name === "BlockGroup" || c.name === "SimpleBlock") {
                            const block = c.name === "BlockGroup" ? c.Block : c;
                            const dataBuffer: Buffer = block.data;
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