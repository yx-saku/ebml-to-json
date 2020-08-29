import { MasterElement, NumberElement, ElementDetail } from "ts-ebml";

export interface Cues extends MasterElement, ElementDetail {
    CuePoint: CuePoint[];
}

export interface CuePoint extends MasterElement, ElementDetail {
    CueTime: NumberElement;
    CueTrackPositions: CueTrackPositions[];
}
export interface CueTrackPositions extends MasterElement, ElementDetail {
    CueTrack: NumberElement;
    CueClusterPosition: NumberElement;
    CueRelativePosition: NumberElement;
    CueDuration: NumberElement;
    CueBlockNumber: NumberElement;
    CueCodecState: NumberElement;
    CueReference: CueReference[];
}
export interface CueReference extends MasterElement, ElementDetail {
    CueRefTime: NumberElement;
    CueRefCluster: NumberElement;
    CueRefNumber: NumberElement;
    CueRefCodecState: NumberElement;
}