import { MasterElement, NumberElement, StringElement, BinaryElement, ElementDetail } from "ts-ebml";

export interface Tracks extends MasterElement, ElementDetail {
    TrackEntry: TrackEntry[];
}

export interface TrackEntry extends MasterElement, ElementDetail {
    TrackNumber: NumberElement;
    TrackUID: NumberElement;
    TrackType: NumberElement;
    FlagEnabled: NumberElement;
    FlagDefault: NumberElement;
    FlagForced: NumberElement;
    FlagLacing: NumberElement;
    MinCache: NumberElement;
    MaxCache: NumberElement;
    DefaultDuration: NumberElement;
    DefaultDecodedFieldDuration: NumberElement;
    TrackTimestampScale: NumberElement;
    TrackOffset: NumberElement;
    MaxBlockAdditionID: NumberElement;
    BlockAdditionMapping: BlockAdditionMapping[];
    Name: StringElement;
    Language: StringElement;
    LanguageIETF: StringElement;
    CodecID: StringElement;
    CodecPrivate: BinaryElement;
    CodecName: StringElement;
    AttachmentLink: NumberElement;
    CodecSettings: StringElement;
    CodecInfoURL: StringElement[];
    CodecDownloadURL: StringElement[];
    CodecDecodeAll: NumberElement;
    TrackOverlay: NumberElement[];
    CodecDelay: NumberElement;
    SeekPreRoll: NumberElement;
    TrackTranslate: TrackTranslate[];
    Video: Video;
    Audio: Audio;
    TrackOperation: TrackOperation;
    TrickTrackUID: NumberElement;
    TrickTrackSegmentUID: BinaryElement;
    TrickTrackFlag: NumberElement;
    TrickMasterTrackUID: NumberElement;
    TrickMasterTrackSegmentUID: BinaryElement;
    ContentEncodings: ContentEncodings;
}
export interface BlockAdditionMapping extends MasterElement, ElementDetail {
    BlockAddIDValue: NumberElement;
    BlockAddIDName: StringElement;
    BlockAddIDType: NumberElement;
    BlockAddIDExtraData: BinaryElement;
}
export interface TrackTranslate extends MasterElement, ElementDetail {
    TrackTranslateEditionUID: NumberElement[];
    TrackTranslateCodec: NumberElement;
    TrackTranslateTrackID: BinaryElement;
}
export interface Video extends MasterElement, ElementDetail {
    FlagInterlaced: NumberElement;
    FieldOrder: NumberElement;
    StereoMode: NumberElement;
    AlphaMode: NumberElement;
    OldStereoMode: NumberElement;
    PixelWidth: NumberElement;
    PixelHeight: NumberElement;
    PixelCropBottom: NumberElement;
    PixelCropTop: NumberElement;
    PixelCropLeft: NumberElement;
    PixelCropRight: NumberElement;
    DisplayWidth: NumberElement;
    DisplayHeight: NumberElement;
    DisplayUnit: NumberElement;
    AspectRatioType: NumberElement;
    ColourSpace: BinaryElement;
    GammaValue: NumberElement;
    FrameRate: NumberElement;
    Colour: Colour;
    Projection: Projection;
}
export interface Colour extends MasterElement, ElementDetail {
    MatrixCoefficients: NumberElement;
    BitsPerChannel: NumberElement;
    ChromaSubsamplingHorz: NumberElement;
    ChromaSubsamplingVert: NumberElement;
    CbSubsamplingHorz: NumberElement;
    CbSubsamplingVert: NumberElement;
    ChromaSitingHorz: NumberElement;
    ChromaSitingVert: NumberElement;
    Range: NumberElement;
    TransferCharacteristics: NumberElement;
    Primaries: NumberElement;
    MaxCLL: NumberElement;
    MaxFALL: NumberElement;
    MasteringMetadata: MasteringMetadata;
}
export interface MasteringMetadata extends MasterElement, ElementDetail {
    PrimaryRChromaticityX: NumberElement;
    PrimaryRChromaticityY: NumberElement;
    PrimaryGChromaticityX: NumberElement;
    PrimaryGChromaticityY: NumberElement;
    PrimaryBChromaticityX: NumberElement;
    PrimaryBChromaticityY: NumberElement;
    WhitePointChromaticityX: NumberElement;
    WhitePointChromaticityY: NumberElement;
    LuminanceMax: NumberElement;
    LuminanceMin: NumberElement;
}
export interface Projection extends MasterElement, ElementDetail {
    ProjectionType: NumberElement;
    ProjectionPrivate: BinaryElement;
    ProjectionPoseYaw: NumberElement;
    ProjectionPosePitch: NumberElement;
    ProjectionPoseRoll: NumberElement;
}
export interface Audio extends MasterElement, ElementDetail {
    SamplingFrequency: StringElement;
    OutputSamplingFrequency: NumberElement;
    Channels: NumberElement;
    ChannelPositions: BinaryElement;
    BitDepth: NumberElement;
}
export interface TrackOperation extends MasterElement, ElementDetail {
    TrackCombinePlanes: TrackCombinePlanes;
    TrackJoinBlocks: TrackJoinBlocks;
}
export interface TrackCombinePlanes extends MasterElement, ElementDetail {
    TrackPlane: MasterElement[];
    TrackPlaneUID: NumberElement;
    TrackPlaneType: NumberElement;
}
export interface TrackJoinBlocks extends MasterElement, ElementDetail {
    TrackJoinUID: NumberElement[];
}
export interface ContentEncodings extends MasterElement, ElementDetail {
    ContentEncoding: ContentEncoding[];
}
export interface ContentEncoding extends MasterElement, ElementDetail {
    ContentEncodingOrder: NumberElement;
    ContentEncodingScope: NumberElement;
    ContentEncodingType: NumberElement;
    ContentCompression: ContentCompression;
    ContentEncryption: ContentEncryption;
}
export interface ContentCompression extends MasterElement, ElementDetail {
    ContentCompAlgo: NumberElement;
    ContentCompSettings: BinaryElement;
}
export interface ContentEncryption extends MasterElement, ElementDetail {
    ContentEncAlgo: NumberElement;
    ContentEncKeyID: BinaryElement;
    ContentEncAESSettings: ContentEncAESSettings;
    ContentSignature: BinaryElement;
    ContentSigKeyID: BinaryElement;
    ContentSigAlgo: NumberElement;
    ContentSigHashAlgo: NumberElement;
}
export interface ContentEncAESSettings extends MasterElement, ElementDetail {
    AESSettingsCipherMode: NumberElement;
}