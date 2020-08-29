import { StringElement, BinaryElement, NumberElement, MasterElement, ElementDetail } from "ts-ebml";

export interface Attachments extends MasterElement, ElementDetail {
    AttachedFile: AttachedFile[];
}

export interface AttachedFile extends MasterElement, ElementDetail {
    FileDescription: StringElement;
    FileName: StringElement;
    FileMimeType: StringElement;
    FileData: BinaryElement;
    FileUID: NumberElement;
    FileReferral: BinaryElement;
    FileUsedStartTime: NumberElement;
    FileUsedEndTime: NumberElement;
}