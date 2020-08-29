import { NumberElement, BinaryElement, MasterElement, StringElement, ElementDetail } from "ts-ebml";
export interface Chapters extends MasterElement, ElementDetail {
    EditionEntry: EditionEntry[];
}
export interface EditionEntry extends MasterElement, ElementDetail {
    EditionUID: NumberElement;
    EditionFlagHidden: NumberElement;
    EditionFlagDefault: NumberElement;
    EditionFlagOrdered: NumberElement;
    ChapterAtom: ChapterAtom[];
}
export interface ChapterAtom extends MasterElement, ElementDetail {
    ChapterUID: NumberElement;
    ChapterStringUID: StringElement;
    ChapterTimeStart: NumberElement;
    ChapterTimeEnd: NumberElement;
    ChapterFlagHidden: NumberElement;
    ChapterFlagEnabled: NumberElement;
    ChapterSegmentUID: BinaryElement;
    ChapterSegmentEditionUID: NumberElement;
    ChapterPhysicalEquiv: NumberElement;
    ChapterTrack: ChapterTrack;
    ChapterDisplay: ChapterDisplay[];
    ChapProcess: ChapProcess[];
}
export interface ChapterTrack extends MasterElement, ElementDetail {
    ChapterTrackUID: NumberElement[];
}
export interface ChapterDisplay extends MasterElement, ElementDetail {
    ChapString: StringElement;
    ChapLanguage: StringElement[];
    ChapLanguageIETF: StringElement[];
    ChapCountry: StringElement[];
}
export interface ChapProcess extends MasterElement, ElementDetail {
    ChapProcessCodecID: NumberElement;
    ChapProcessPrivate: BinaryElement;
    ChapProcessCommand: ChapProcessCommand[];
}
export interface ChapProcessCommand extends MasterElement, ElementDetail {
    ChapProcessTime: NumberElement;
    ChapProcessData: BinaryElement;
}
