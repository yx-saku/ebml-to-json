import { MasterElement, ElementDetail } from "ts-ebml";
import { SeekHead } from "./SeekHead";
import { Info } from "./Info";
import { Cluster } from "./Cluster";
import { Tracks } from "./Tracks";
import { Cues } from "./Cues";
import { Attachments } from "./Attachments";
import { Chapters } from "./Chapters";
import { Tags } from "./Tags";

export interface Segment extends MasterElement, ElementDetail {
    SeekHead: SeekHead[];
    Info: Info[];
    Cluster: Cluster[];
    Tracks: Tracks[];
    Cues: Cues;
    Attachments: Attachments;
    Chapters: Chapters;
    Tags: Tags[];
}