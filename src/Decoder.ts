import { EbmlSchemaJson } from "./EbmlSchemaJson";
import { blockElements, EBMLElement, BlockStructure } from "./EbmlToJson";

export class Decoder {
    private dataView: DataView;

    constructor(public readonly buffer: ArrayBuffer) {
        this.dataView = new DataView(buffer);
    }

    /**
     * 可変長整数をデコードする
     * @param start 
     * @returns 
     */
    private readVint(start: number, withLength = false) {
        let octetLength = 1;

        // 左から見て最初に1が登場するbit数 = vintのオクテット長
        let i = 0;
        let lengthByte: number;
        while ((lengthByte = this.dataView.getUint8(start + i)) === 0) {
            octetLength += 8;
            i++;
        }

        while ((lengthByte & (0x80 >>> ((octetLength - 1) % 8))) === 0) octetLength++;

        let value = BigInt(lengthByte);

        i++;
        for (; i < octetLength; i++) {
            value = (value << 8n) | BigInt(this.dataView.getUint8(start + i));
        }

        const dataMask = (1n << BigInt(octetLength * 8 - octetLength)) - 1n;
        if (!withLength)
            value &= dataMask;

        return {
            value,
            size: octetLength,
            unknownsize: (value & dataMask) == dataMask
        };
    }

    /**
     * jsonにデコードする
     * @returns 
     */
    public decode() {
        const self = this;
        let pos = 0;
        let lastLoaded = null;
        return (function decode(parentPath = "", parentEnd = self.dataView.byteLength) {
            let elements = [] as EBMLElement[];

            while (pos < parentEnd) {
                const element = { pos: { id: {}, size: {}, data: {} } } as EBMLElement;

                try {
                    // Element ID を取得
                    if (lastLoaded == null) {
                        const idInfo = self.readVint(pos, true);
                        element.pos.id.start = pos;
                        element.id = idInfo.value;
                        pos += idInfo.size;
                    }
                    else {
                        element.pos.id.start = lastLoaded.start;
                        element.id = lastLoaded.id;
                    }

                    element.pos.id.end = pos;

                    const id = `0x${element.id.toString(16).toUpperCase()}`;
                    element.schema = EbmlSchemaJson.EBMLSchema.element.filter(e => e["@id"] == id)[0];

                    // データサイズが不明な要素を読み込み中、スキーマと親要素が一致しない要素が出てきたらデータ終わりと判定
                    const paths = parentPath.split("\\").slice(1);
                    const schemaPaths = element.schema?.["@path"].split("\\").slice(1);
                    if (paths.length > 0) {
                        if (paths[paths.length - 1] != schemaPaths[schemaPaths.length - 2]) {
                            return { elements, lastLoaded: { id: element.id, start: element.pos.id.start } };
                        }
                    }

                    lastLoaded = null;

                    // Size（データ長）を取得
                    element.pos.size.start = pos;

                    const sizeInfo = self.readVint(pos);

                    pos += sizeInfo.size;
                    element.pos.size.end = pos;

                    // データ部分の抽出
                    element.pos.data.start = pos;
                    if (!sizeInfo.unknownsize) {
                        element.size = sizeInfo.value;
                        element.pos.data.end = pos + Number(element.size);
                    }

                    // 階層
                    element.level = paths.length;

                    if (blockElements.includes(<any>element.schema["@name"])) {
                        // SimpleBlock,Blockの内部構造をデコード
                        const block = {} as BlockStructure;

                        // TrackNumber
                        const trackNumber = self.readVint(pos);
                        pos += trackNumber.size;
                        block.TrackNumber = trackNumber.value;

                        // Timestamp
                        block.Timestamp = self.dataView.getInt8(pos++);
                        block.Timestamp <<= 8;
                        block.Timestamp |= self.dataView.getUint8(pos++);

                        const octet = self.dataView.getUint8(pos);
                        pos++;

                        // KEY
                        block.KEY = (octet & 0b10000000) != 0;

                        // Rsvrd
                        block.Rsvrd = (octet & 0b01110000) >>> 4;

                        // INV
                        block.INV = (octet & 0b00001000) != 0;

                        // LACING
                        block.LACING = (octet & 0b00000110) >>> 1;

                        // DIS
                        block.DIS = (octet & 0b00000001) != 0;

                        block.frameData = <ArrayBuffer>self.dataView.buffer.slice(pos, element.pos.data.end);
                        pos += block.frameData.byteLength;

                        element.data = block;
                    }
                    else {
                        if (element.schema?.["@type"] == "master") {
                            element.data
                        }
                        const typ = element.schema?.["@type"];
                        switch (typ) {
                            case "master":
                                if (element.size == 0n)
                                    element.data = [];
                                else {
                                    const currentPath = parentPath + "\\" + element.schema?.["@name"];
                                    const ret = decode(currentPath, element.pos.data.end ?? parentEnd);

                                    if ("lastLoaded" in ret) {
                                        lastLoaded = ret.lastLoaded;
                                    }
                                    element.data = ret.elements
                                }
                                break;
                            case "integer":
                                if (element.size > 0) {
                                    let val = BigInt(self.dataView.getInt8(pos++));
                                    for (let i = 1; i < element.size; i++) {
                                        val <<= 8n;
                                        val |= BigInt(self.dataView.getUint8(pos++));
                                    }
                                    element.data = val;
                                }
                                else {
                                    element.data = 0n;
                                }
                                break;
                            case "uinteger":
                                if (element.size > 0) {
                                    let val = 0n;
                                    for (let i = 0; i < element.size; i++) {
                                        val <<= 8n;
                                        val |= BigInt(self.dataView.getUint8(pos++));
                                    }

                                    element.data = val;
                                }
                                else {
                                    element.data = 0n;
                                }
                                break;
                            case "float":
                                if (element.size == 0n) element.data = 0;
                                if (element.size == 4n) {
                                    element.data = self.dataView.getFloat32(pos, false);
                                    pos += 4;
                                }
                                if (element.size == 8n) {
                                    element.data = self.dataView.getFloat64(pos, false);
                                    pos += 8;
                                }
                                break;
                            case "date":
                                let nanos = BigInt(new Date(2001, 0, 1).getTime()) * 1000n * 1000n;
                                if (element.size > 0) {
                                    nanos += self.dataView.getBigInt64(pos);
                                    pos += 8;
                                }
                                element.data = { date: new Date(Number(nanos / 1000n / 1000n)), nanos };
                                break;
                            default:
                                const buf = self.dataView.buffer.slice(element.pos.data.start, element.pos.data.end ?? parentEnd);
                                switch (typ) {
                                    case "string":
                                        element.data = String.fromCharCode.apply("", new Uint8Array(buf));
                                        break;
                                    case "utf-8":
                                        const decoder = new TextDecoder("utf-8");
                                        element.data = decoder.decode(new Uint8Array(buf));
                                        break;
                                    default:
                                        element.data = buf;
                                        break;
                                }

                                pos += buf.byteLength;
                                break;
                        }
                    }
                }
                catch (e) {
                    if (e.name == "RangeError") {
                        // データが途中で切れている
                        return { elements, notMachBuffer: self.dataView.buffer.slice(element.pos.id.start) };
                    }
                    else {
                        throw e;
                    }
                }

                if (element.pos.data.end == null)
                    element.pos.data.end = pos;
                else if (element.pos.data.end != pos)
                    throw `データの位置がずれている: ${element.pos.data.end} ${pos}`

                // JSON 構造として保存
                elements.push(element);
            }

            return { elements };
        })().elements;
    }
}