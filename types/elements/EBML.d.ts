import { NumberElement, StringElement, MasterElement, ElementDetail } from "ts-ebml";
export interface EBML extends MasterElement, ElementDetail {
    EBMLVersion: NumberElement;
    EBMLReadVersion: NumberElement;
    EBMLMaxIDLength: NumberElement;
    EBMLMaxSizeLength: NumberElement;
    DocType: StringElement;
    DocTypeVersion: NumberElement;
    DocTypeReadVersion: NumberElement;
}
