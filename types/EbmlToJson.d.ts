import { EBML, Segment } from "./elements";
export declare class EbmlToJson {
    EBML: EBML;
    Segment: Segment;
    /**
     * EBMLファイルを読み込み、EBML・Segmentプロパティに設定する
     * @param buffer
     */
    constructor(buffer: ArrayBuffer);
    /**
     * Json化したEBMLファイルをBlobにして返します。
     * @param codecs
     */
    toBlob(codecs: string): Blob;
    /**
     * Json化したEBMLファイルを文字列で出力します。
     */
    toString(): string;
    private _jsonToElmArray;
}
