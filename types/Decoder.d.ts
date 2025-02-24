import { EBMLElement, SimpleBlockStructure } from "./EbmlToJson";
export declare class Decoder {
    readonly buffer: ArrayBuffer;
    private dataView;
    constructor(buffer: ArrayBuffer);
    /**
     * 可変長整数をデコードする
     * @param start
     * @returns
     */
    private readVint;
    /**
     * jsonにデコードする
     * @returns
     */
    decode(): EBMLElement[];
    /**
     * SimpleBlockとしてデコードする
     */
    decodeSimpleBlock(): SimpleBlockStructure;
}
