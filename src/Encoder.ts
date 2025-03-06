import { EBMLElement, BlockStructure, blockElements } from "./EbmlToJson";

export class Encoder {
    constructor(public readonly elements: EBMLElement[]) { }

    /**
     * uintを表せる最小のbit数を返す
     * @param uint 
     * @returns 
     */
    public getUintSize(uint: number | bigint) {
        const nUint = BigInt(uint);
        let length = 1;
        while ((nUint >> BigInt(length)) !== 0n) length++;

        return length;
    }

    /**
     * 整数をバッファに書き込む
     * @param value 
     */
    private writeInt(type: "int" | "uint", value: number | bigint, byteLength?: number) {
        const isNegative = value < 0;
        value = value < 0 ? -value : value;

        if (byteLength == null) {
            const bitLength = this.getUintSize(value);
            byteLength = Math.ceil(bitLength / 8);
            if (type == "int" && bitLength % 8 == 0) {
                byteLength++;
            }
        }

        value = BigInt(value);

        const uint8Array = new Uint8Array(byteLength);
        for (let i = 0; i < byteLength; i++) {
            uint8Array[i] = Number((value >> (BigInt(byteLength - (i + 1))) * 8n) & 0xFFn);
        }

        if (type == "int" && isNegative) {
            uint8Array[0] |= 0x80;
        }

        return uint8Array.buffer;
    }

    /**
     * 可変長整数をエンコードする
     * @param start 
     * @returns 
     */
    private writeVint(value: number | bigint, options?: { allowAllOne?: boolean, withOctetLength?: boolean }) {
        if (!options?.withOctetLength) {
            const bitLength = this.getUintSize(value);
            let octetLength = 0;
            while (bitLength > octetLength * 8 - octetLength)
                octetLength++;

            if (!options?.allowAllOne) {
                const vintMax = Math.pow(2, 8 * octetLength - octetLength) - 1;
                if (vintMax == value) {
                    octetLength++;  // Data部が全て1はNG
                }
            }

            value = BigInt(value);
            const octetLengthBit = (0x80n << BigInt((octetLength - 1) * 8)) >> BigInt(octetLength - 1);
            value |= octetLengthBit;
        }

        return this.writeInt("uint", value);
    }

    /**
     * バイナリデータにデコードする
     * @returns 
     */
    public encode() {
        const self = this;
        let prev = -1;
        let totalWroteSize = 0;
        return (function encode(elements: EBMLElement[] = self.elements) {
            const buffers = elements.map(e => {
                const buffer = {} as { id: ArrayBuffer, size: ArrayBuffer, data: ArrayBuffer };

                // Element ID を書き込む
                buffer.id = self.writeVint(e.id, { withOctetLength: true });
                totalWroteSize += buffer.id.byteLength;

                // データ部分
                if (blockElements.includes(<any>e.schema["@name"])) {
                    const block = (<BlockStructure>e.data);
                    prev = block.Timestamp;

                    const trackNumber = self.writeVint(block.TrackNumber);
                    const sbBuf = new Uint8Array(new ArrayBuffer(trackNumber.byteLength + 3 + block.frameData.byteLength));
                    let offset = 0;

                    sbBuf.set(new Uint8Array(trackNumber), offset);
                    offset += trackNumber.byteLength;

                    sbBuf.set(new Uint8Array(self.writeInt("int", block.Timestamp, 2)), offset);
                    offset += 2;

                    let octet = (block.KEY ? 1 : 0) << 7;
                    octet |= block.Rsvrd << 4;
                    octet |= (block.INV ? 1 : 0) << 3;
                    octet |= block.LACING << 1;
                    octet |= block.DIS ? 1 : 0;
                    sbBuf.set(new Uint8Array([octet]), offset);
                    offset++;

                    sbBuf.set(new Uint8Array(block.frameData), offset);

                    buffer.data = sbBuf.buffer;
                }
                else {
                    const typ = e.schema?.["@type"];
                    switch (typ) {
                        case "master":
                            buffer.data = encode(<EBMLElement[]>e.data);
                            break;
                        case "integer":
                            buffer.data = self.writeInt("int", <bigint>e.data);
                            break;
                        case "uinteger":
                            buffer.data = self.writeInt("uint", <bigint>e.data);
                            break;
                        case "float":
                            const num = <number>e.data;
                            if (num != 0) {
                                if (new Float32Array([num])[0] === num) {
                                    const dataView = new DataView(new ArrayBuffer(4));
                                    dataView.setFloat32(0, num, false);
                                    buffer.data = dataView.buffer;
                                }
                                else {
                                    const dataView = new DataView(new ArrayBuffer(8));
                                    dataView.setFloat64(0, num, false);
                                    buffer.data = dataView.buffer;
                                }
                            }
                            break;
                        case "date":
                            let nanos = BigInt(new Date(2001, 0, 1).getTime()) * 1000n * 1000n;
                            const nanoOffset = e.data["nanos"] - nanos;
                            if (nanoOffset != 0n) {
                                buffer.data = BigInt64Array.of(nanoOffset).buffer;
                            }
                            break;
                        default:
                            switch (typ) {
                                case "string": {
                                    const str = <string>e.data;
                                    const uint8Array = new Uint8Array([...str].map(char => char.charCodeAt(0)));
                                    buffer.data = uint8Array.buffer;
                                    break;
                                }
                                case "utf-8": {
                                    const str = <string>e.data;
                                    const encoder = new TextEncoder();
                                    const uint8Array = encoder.encode(str);
                                    buffer.data = <ArrayBuffer>uint8Array.buffer;
                                    break;
                                }
                                default:
                                    buffer.data = <ArrayBuffer>e.data;
                                    break;
                            }
                            break;
                    }
                }

                if (buffer.data == null) {
                    buffer.data = new ArrayBuffer(0);
                }

                // Size（データ長）を書き込む
                if (e.schema["@unknownsizeallowed"] != "1")
                    buffer.size = self.writeVint(buffer.data.byteLength);
                else
                    buffer.size = self.writeVint(0xFFFFFFFFFFFFFFn, { allowAllOne: true });
                totalWroteSize += buffer.size.byteLength;

                if (e.schema?.["@type"] != "master") {
                    totalWroteSize += buffer.data.byteLength;
                }

                return buffer;
            });

            const totalSize = buffers.reduce((p, c) => p + c.id.byteLength + c.size.byteLength + c.data.byteLength, 0);
            const totalUint8Array = new Uint8Array(new ArrayBuffer(totalSize));

            let offset = 0;
            buffers.forEach(b => {
                totalUint8Array.set(new Uint8Array(b.id), offset);
                offset += b.id.byteLength;
                totalUint8Array.set(new Uint8Array(b.size), offset);
                offset += b.size.byteLength;
                totalUint8Array.set(new Uint8Array(b.data), offset);
                offset += b.data.byteLength;
            });

            return totalUint8Array.buffer;
        })();
    }
}