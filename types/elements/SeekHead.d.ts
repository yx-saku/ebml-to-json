import { MasterElement, BinaryElement, NumberElement, ElementDetail } from "ts-ebml";
export interface SeekHead extends MasterElement, ElementDetail {
    Seek: Seek;
}
export interface Seek extends MasterElement, ElementDetail {
    SeekID: BinaryElement;
    SeekPosition: NumberElement;
}
