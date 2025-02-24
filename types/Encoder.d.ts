import { EBMLElement } from "./EbmlToJson";
export declare class Encoder {
    readonly elements: EBMLElement[];
    constructor(elements: EBMLElement[]);
    /**
     * uintを表せる最小のbit数を返す
     * @param uint
     * @returns
     */
    getUintSize(uint: number | bigint): number;
    /**
     * 整数をバッファに書き込む
     * @param value
     */
    private writeInt;
    /**
     * 可変長整数をエンコードする
     * @param start
     * @returns
     */
    private writeVint;
    /**
     * バイナリデータにデコードする
     * @returns
     */
    encode(): ArrayBuffer;
}
