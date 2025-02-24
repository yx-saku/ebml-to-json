import { NumberElement, MasterElement, BinaryElement, ElementDetail } from "ts-ebml";
export interface Cluster extends MasterElement, ElementDetail {
    Timecode: NumberElement;
    SilentTracks: SilentTracks;
    Position: NumberElement;
    PrevSize: NumberElement;
    EncryptedBlock: BinaryElement[];
    blocks: (SimpleBlock | BlockGroup)[];
}
export interface SilentTracks extends MasterElement, ElementDetail {
    SilentTrackNumber: NumberElement[];
}
export interface SimpleBlock extends BinaryElement, ElementDetail {
    trackNumber: number;
    timecode: number;
    blockDuration: number;
    data: Buffer;
}
export interface BlockGroup extends MasterElement, ElementDetail {
    Block: BinaryElement;
    BlockVirtual: BinaryElement;
    BlockAdditions: BlockAdditions;
    BlockDuration: NumberElement;
    ReferencePriority: NumberElement;
    ReferenceBlock: NumberElement[];
    ReferenceVirtual: NumberElement;
    CodecState: BinaryElement;
    DiscardPadding: NumberElement;
    Slices: Slices;
    ReferenceFrame: ReferenceFrame;
    trackNumber: number;
    timecode: number;
    blockDuration: number;
}
export interface BlockAdditions extends MasterElement, ElementDetail {
    BlockMore: BlockMore[];
}
export interface BlockMore extends MasterElement, ElementDetail {
    BlockAddID: NumberElement;
    BlockAdditional: BinaryElement;
}
export interface Slices extends MasterElement, ElementDetail {
    TimeSlice: TimeSlice[];
}
export interface TimeSlice extends MasterElement, ElementDetail {
    LaceNumber: NumberElement;
    FrameNumber: NumberElement;
    BlockAdditionID: NumberElement;
    Delay: NumberElement;
    SliceDuration: NumberElement;
}
export interface ReferenceFrame extends MasterElement, ElementDetail {
    ReferenceOffset: NumberElement;
    ReferenceTimestamp: NumberElement;
}
