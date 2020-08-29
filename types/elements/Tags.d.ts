import { MasterElement, NumberElement, StringElement, BinaryElement, ElementDetail } from "ts-ebml";
export interface Tags extends MasterElement, ElementDetail {
    Tag: Tag[];
}
export interface Tag extends MasterElement, ElementDetail {
    Targets: Targets;
    SimpleTag: SimpleTag[];
}
export interface Targets extends MasterElement, ElementDetail {
    TargetTypeValue: NumberElement;
    TargetType: StringElement;
    TagTrackUID: NumberElement[];
    TagEditionUID: NumberElement[];
    TagChapterUID: NumberElement[];
    TagAttachmentUID: NumberElement[];
}
export interface SimpleTag extends MasterElement, ElementDetail {
    TagName: StringElement;
    TagLanguage: StringElement;
    TagLanguageIETF: StringElement;
    TagDefault: NumberElement;
    TagString: StringElement;
    TagBinary: BinaryElement;
}
