import { MasterElement, DateElement, NumberElement, BinaryElement, StringElement, ElementDetail } from "ts-ebml";

export interface Info extends MasterElement, ElementDetail {
    SegmentUID: BinaryElement;
    SegmentFilename: StringElement;
    PrevUID: BinaryElement;
    PrevFilename: StringElement;
    NextUID: BinaryElement;
    NextFilename: StringElement;
    SegmentFamily: BinaryElement[];
    ChapterTranslate: ChapterTranslate[];
    TimestampScale: NumberElement;
    Duration: NumberElement;
    DateUTC: DateElement;
    Title: StringElement;
    MuxingApp: StringElement;
    WritingApp: StringElement;
}

export interface ChapterTranslate extends MasterElement, ElementDetail {
    ChapterTranslateEditionUID: NumberElement[];
    ChapterTranslateCodec: NumberElement;
    ChapterTranslateID: BinaryElement;
}