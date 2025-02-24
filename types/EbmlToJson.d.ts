import { EbmlSchemaJson } from "./EbmlSchemaJson";
type EBMLSchemaAll = typeof EbmlSchemaJson.EBMLSchema.element;
export type EBMLSchema<T extends EBMLSchemaAll[number]["@name"] = EBMLSchemaAll[number]["@name"]> = Extract<EBMLSchemaAll[number], {
    "@name": T;
}>;
export type EBMLSchemaFromType<T extends EBMLSchemaAll[number]["@type"] = EBMLSchemaAll[number]["@type"]> = Extract<EBMLSchemaAll[number], {
    "@type": T;
}>;
export type EBMLElementValueType<T extends EBMLSchema = EBMLSchema> = T extends {
    "@name": "SimpleBlock";
} ? SimpleBlockStructure : T extends {
    "@type": "master";
} ? EBMLTreeElement : T extends {
    "@type": "uinteger" | "integer";
} ? bigint : T extends {
    "@type": "float";
} ? number : T extends {
    "@type": "string" | "utf-8";
} ? string : T extends {
    "@type": "date";
} ? {
    date: Date;
    nanos: bigint;
} : T extends {
    "@type": "binary";
} ? ArrayBuffer | SharedArrayBuffer : never;
export type EBMLElement<T extends EBMLSchema = EBMLSchema> = {
    id: bigint;
    size: bigint;
    pos: {
        id: {
            start: number;
            end: number;
        };
        size: {
            start: number;
            end: number;
        };
        data: {
            start: number;
            end: number;
        };
    };
    schema: T;
    data: T extends {
        "@type": "master";
    } ? EBMLElement[] : EBMLElementValueType<T>;
};
export type EBMLTreeElement = {
    [K in EBMLSchema as K["@name"]]?: (K extends {
        "@maxOccurs": any;
    } ? (K["@maxOccurs"] extends "1" ? EBMLElementValueType<K> : EBMLElementValueType<K>[]) : EBMLElementValueType<K>[]);
};
export type SimpleBlockStructure = {
    TrackNumber: bigint;
    Timestamp: number;
    KEY: boolean;
    Rsvrd: number;
    INV: boolean;
    LACING: LACING;
    DIS: boolean;
    frameData: ArrayBuffer;
};
export declare enum LACING {
    No = 0,
    Xiph = 1,
    EBML = 3,
    FixedSize = 2
}
export declare class EbmlToJson {
    readonly elements: EBMLElement[];
    readonly tree: EBMLTreeElement;
    readonly notMathBuffer: ArrayBuffer;
    /**
     * EBMLファイルを読み込み、プロパティに設定する
     * @param buffer
     */
    constructor(buffer?: ArrayBuffer);
    /**
     * データを結合して一つのEBMLにします
     * @param ebmlToJson
     */
    append(ebmlToJson: EbmlToJson): void;
    /**
     * EBMLをBlobにして返します。
     * @param codecs
     */
    toBlob(codecs: string): Blob;
    /**
     * EBMLをArrayBufferにして返します。
     */
    toArrayBuffer(): ArrayBuffer;
    toJSON(): any;
    static JSONReplacer(key: string, value: any): any;
}
export {};
