import { Decoder } from "./Decoder";
import { Encoder } from "./Encoder";
import { EbmlSchemaJson } from "./EbmlSchemaJson"

type EBMLSchemaAll = typeof EbmlSchemaJson.EBMLSchema.element

export type EBMLSchema<T extends EBMLSchemaAll[number]["@name"] = EBMLSchemaAll[number]["@name"]> =
    Extract<EBMLSchemaAll[number], { "@name": T }>;

export type EBMLSchemaFromType<T extends EBMLSchemaAll[number]["@type"] = EBMLSchemaAll[number]["@type"]> =
    Extract<EBMLSchemaAll[number], { "@type": T }>;

export type EBMLElementValueType<T extends EBMLSchema = EBMLSchema> =
    T extends { "@name": "SimpleBlock" } ? SimpleBlockStructure :
    T extends { "@type": "master" } ? EBMLTreeElement :
    T extends { "@type": "uinteger" | "integer" } ? bigint :
    T extends { "@type": "float" } ? number :
    T extends { "@type": "string" | "utf-8" } ? string :
    T extends { "@type": "date" } ? { date: Date, nanos: bigint } :
    T extends { "@type": "binary" } ? ArrayBuffer | SharedArrayBuffer :
    never

export type EBMLElement<T extends EBMLSchema = EBMLSchema> = {
    id: bigint,
    size: bigint,
    pos: {
        id: { start: number, end: number },
        size: { start: number, end: number },
        data: { start: number, end: number }
    },
    schema: T,
    level: number,
    data: T extends { "@type": "master" } ? EBMLElement[] : EBMLElementValueType<T>
};

export type EBMLTreeElement = {
    [K in EBMLSchema as K["@name"]]?: (
        K extends { "@maxOccurs": any } ? (
            K["@maxOccurs"] extends "1" ?
            EBMLElementValueType<K> :
            EBMLElementValueType<K>[]
        ) :
        EBMLElementValueType<K>[]
    )
};

export type SimpleBlockStructure = {
    TrackNumber: bigint,
    Timestamp: number,
    KEY: boolean,
    Rsvrd: number,
    INV: boolean,
    LACING: LACING,
    DIS: boolean,
    frameData: ArrayBuffer
}

export enum LACING {
    No = 0b00,
    Xiph = 0b01,
    EBML = 0b11,
    FixedSize = 0b10
}

function isPlainObject(obj: any): boolean {
    return obj !== null && typeof obj === "object" && obj.constructor === Object;
}

export class EbmlToJson {
    public readonly elements: EBMLElement[];
    public readonly tree: EBMLTreeElement;
    public readonly notMathBuffer: ArrayBuffer;

    /**
     * EBMLファイルを読み込み、プロパティに設定する
     * @param buffer 
     */
    public constructor(buffer?: ArrayBuffer) {
        this.elements = buffer ? new Decoder(buffer).decode() : [];

        const proxyToObject = new WeakMap<object, object>();
        const objectToProxy = new WeakMap<object, object>();
        function proxyFactry<T = EBMLTreeElement | (EBMLTreeElement | EBMLElementValueType)[]>(
            targetObj: T, elements: EBMLElement[], elementName?: EBMLSchema["@name"]): T {

            if (targetObj == null || typeof (targetObj) != "object" || objectToProxy.has(targetObj))
                return targetObj;

            function getTargetElements(target: T & object, key: string) {
                if (Array.isArray(target)) {
                    const index = parseInt(key);
                    return elements
                        .filter(e => e.schema["@name"] == elementName)
                        .filter((_, i) => i == index);
                }
                else {
                    return elements
                        .filter(e => e.schema["@name"] == key)
                }
            }

            const proxy = new Proxy(targetObj, {

                get(target, key) {
                    if (key === "toJSON") {
                        return () => {
                            const replacer = (val: any) => {
                                if (typeof (val.toJSON) == "function")
                                    return val.toJSON();

                                return val;
                            };

                            const proxy = objectToProxy.get(target);
                            return Array.isArray(proxy) ?
                                proxy.map(replacer) :
                                Object.keys(proxy).reduce((p, c) => {
                                    p[c] = replacer(proxy[c]);
                                    return p;
                                }, {});
                        };
                    }

                    if (typeof (target[key]) == "function" || Array.isArray(target) && !/^[0-9]+$/.test(<string>key)) {
                        return target[key];
                    }

                    // アクセスしたキーに該当する要素を取得
                    const targetElements = getTargetElements(target, <string>key);

                    // 要素に設定された値を取得
                    const valueList = targetElements
                        .map(e => Array.isArray(e.data) ?
                            proxyFactry({} as EBMLTreeElement, e.data) :
                            e.data);

                    if (Array.isArray(target)) {
                        // 配列の添字にアクセスしたら、その添字の要素を取得
                        return valueList[0];
                    }
                    else {
                        // ツリーのプロパティにアクセスしたら、対応する要素やその配列を返す
                        const schema = EbmlSchemaJson.EBMLSchema.element.filter(e => e["@name"] == key)[0];
                        if (valueList.length == 0)
                            return undefined;
                        else if (valueList.length == 1 && schema?.["@maxOccurs"] == "1")
                            return valueList[0];
                        else
                            return proxyFactry(valueList, elements, <EBMLSchema["@name"]>key);
                    }
                },

                set(target, key, value) {
                    if (Array.isArray(target) && !/^[0-9]+$/.test(<string>key)) {
                        return Reflect.set(target, key, value);
                    }

                    // アクセスしたキーに該当する要素を取得
                    const targetElements = getTargetElements(target, <string>key);

                    // 配列化
                    if (!Array.isArray(value)) {
                        value = [value];
                    }

                    let i = 0;
                    for (; i < value.length; i++) {
                        const data = (function recursive(val) {
                            if (isPlainObject(val)) {
                                // オブジェクトを配列に変換
                                return Object.keys(val).flatMap(k => {
                                    const schema = EbmlSchemaJson.EBMLSchema.element.filter(e => e["@name"] == k)[0];
                                    const vals = Array.isArray(val[k]) ? val[k] : [val[k]];
                                    return vals.map(v => ({
                                        id: schema ? BigInt(schema["@id"]) : null,
                                        pos: null,
                                        size: null,
                                        schema,
                                        data: schema["@name"] == "SimpleBlock" ? v : recursive(v)   // SimpleBlockだけ例外
                                    } as EBMLElement));
                                });
                            }
                            else {
                                return val; // 配列の入れ子は構造上ありえない。そのまま返す
                            }
                        })(value[i]);

                        if (i < targetElements.length) {
                            // 既に存在する要素の値を更新
                            targetElements[i].data = data;
                        }
                        else {
                            // 新しい要素を追加
                            const name = Array.isArray(target) ? elementName : key;
                            const schema = EbmlSchemaJson.EBMLSchema.element.filter(e => e["@name"] == name)[0];
                            elements.push({
                                id: schema ? BigInt(schema["@id"]) : null,
                                pos: null,
                                size: null,
                                schema,
                                data
                            } as EBMLElement)
                        }
                    }

                    // 余分な要素を削除
                    targetElements.slice(i).forEach(v => {
                        const i = elements.indexOf(v);
                        elements.splice(i, 1);
                    });

                    return true;
                },

                ownKeys(target) {
                    return Array.isArray(target) ?
                        elements.filter(e => e.schema["@name"] == elementName).map((_, i) => String(i)) :
                        Array.from(new Set(elements.map(e => e.schema["@name"])));
                },

                has(target, prop) {
                    return this.ownKeys(target).includes(prop);
                },

                getOwnPropertyDescriptor(target, prop) {
                    if (this.has(target, prop)) {
                        return {
                            enumerable: true,
                            configurable: true
                        };
                    }
                    return undefined;
                },
            });

            proxyToObject.set(proxy, targetObj);
            objectToProxy.set(targetObj, proxy);
            return proxy;
        }

        this.tree = proxyFactry({} as EBMLTreeElement, this.elements);
    }

    /**
     * データを結合して一つのEBMLにします
     * @param ebmlToJson 
     */
    public append(ebmlToJson: EbmlToJson) {
        for (const e of ebmlToJson.elements) {
            const level = e.schema["@path"].split("\\").length - 1;
            let parent = this.elements[this.elements.length - 1];
            while (parent.schema["@path"].split("\\").length - 1 < level - 1) {
                parent = parent.data[(<EBMLElement[]>parent.data).length - 1];
            }

            (<EBMLElement[]>parent.data).push(e);
        }
    }

    /**
     * EBMLをBlobにして返します。
     * @param codecs 
     */
    public toBlob(codecs: string) {
        const buf = this.toArrayBuffer();
        return new Blob([buf], { type: `video/webm; codecs="${codecs}"` });
    }

    /**
     * EBMLをArrayBufferにして返します。
     */
    public toArrayBuffer() {
        const encoder = new Encoder(this.elements);
        return encoder.encode();
    }

    public toJSON() {
        return (<any>this.tree).toJSON();
    }

    public static JSONReplacer(key: string, value: any) {
        if (typeof (value) == "bigint")
            return `Bigint ${value.toString()}n`;
        if (value instanceof ArrayBuffer)
            return `ArrayBuffer ${value.byteLength}bytes`;

        return value;
    }
}
