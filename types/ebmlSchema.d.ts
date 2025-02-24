export declare const ebmlSchema: {
    readonly EBMLSchema: {
        readonly "@xmlns": "urn:ietf:rfc:8794";
        readonly "@docType": "ebml";
        readonly "@version": "1";
        readonly element: readonly [{
            readonly "@name": "EBML";
            readonly "@path": "\\EBML";
            readonly "@id": "0x1A45DFA3";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set the EBML characteristics of the data to follow. Each EBML document has to start with this.";
            };
        }, {
            readonly "@name": "EBMLVersion";
            readonly "@path": "\\EBML\\EBMLVersion";
            readonly "@id": "0x4286";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@default": "1";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The version of EBML parser used to create the file.";
            };
        }, {
            readonly "@name": "EBMLReadVersion";
            readonly "@path": "\\EBML\\EBMLReadVersion";
            readonly "@id": "0x42F7";
            readonly "@type": "uinteger";
            readonly "@range": "1";
            readonly "@default": "1";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The minimum EBML version a parser has to support to read this file.";
            };
        }, {
            readonly "@name": "EBMLMaxIDLength";
            readonly "@path": "\\EBML\\EBMLMaxIDLength";
            readonly "@id": "0x42F2";
            readonly "@type": "uinteger";
            readonly "@range": ">=4";
            readonly "@default": "4";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The maximum length of the IDs you'll find in this file (4 or less in Matroska).";
            };
        }, {
            readonly "@name": "EBMLMaxSizeLength";
            readonly "@path": "\\EBML\\EBMLMaxSizeLength";
            readonly "@id": "0x42F3";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@default": "8";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The maximum length of the sizes you'll find in this file (8 or less in Matroska). This does not override the element size indicated at the beginning of an element. Elements that have an indicated size which is larger than what is allowed by EBMLMaxSizeLength shall be considered invalid.";
            };
        }, {
            readonly "@name": "DocType";
            readonly "@path": "\\EBML\\DocType";
            readonly "@id": "0x4282";
            readonly "@type": "string";
            readonly "@length": ">0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A string that describes the type of document that follows this EBML header, for example 'matroska' or 'webm'.";
            };
        }, {
            readonly "@name": "DocTypeVersion";
            readonly "@path": "\\EBML\\DocTypeVersion";
            readonly "@id": "0x4287";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@default": "1";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The version of DocType interpreter used to create the file.";
            };
        }, {
            readonly "@name": "DocTypeReadVersion";
            readonly "@path": "\\EBML\\DocTypeReadVersion";
            readonly "@id": "0x4285";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@default": "1";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The minimum DocType version an interpreter has to support to read this file.";
            };
        }, {
            readonly "@name": "DocTypeExtension";
            readonly "@path": "\\EBML\\DocTypeExtension";
            readonly "@id": "0x4281";
            readonly "@type": "master";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A DocTypeExtension adds extra Elements to the main DocType+DocTypeVersion\ttuple it's attached to. An EBML Reader **MAY** know these extra Elements and how to use them. A DocTypeExtension **MAY** be used to iterate between\texperimental Elements before they are integrated into a regular\tDocTypeVersion. Reading one DocTypeExtension version of a DocType+DocTypeVersion tuple doesn't imply one should be able to read upper versions of this DocTypeExtension.";
            };
        }, {
            readonly "@name": "DocTypeExtensionName";
            readonly "@path": "\\EBML\\DocTypeExtension\\DocTypeExtensionName";
            readonly "@id": "0x4283";
            readonly "@type": "string";
            readonly "@length": ">0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The name of the DocTypeExtension to differentiate it from other DocTypeExtensions of the same DocType+DocTypeVersion tuple. A DocTypeExtensionName value **MUST** be unique within the EBML Header.";
            };
        }, {
            readonly "@name": "DocTypeExtensionVersion";
            readonly "@path": "\\EBML\\DocTypeExtension\\DocTypeExtensionVersion";
            readonly "@id": "0x4284";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The version of the DocTypeExtension. Different DocTypeExtensionVersion values of the same DocType + DocTypeVersion + DocTypeExtensionName tuple **MAY** contain completely different sets of extra Elements. An EBML Reader **MAY** support multiple versions\tof the same tuple, only one version of the tuple, or not support the tuple at all.";
            };
        }, {
            readonly "@name": "Void";
            readonly "@path": "\\(-\\)Void";
            readonly "@id": "0xEC";
            readonly "@type": "binary";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Used to void damaged data, to avoid unexpected behaviors when using damaged data. The content is discarded. Also used to reserve space in a sub-element for later use.";
            };
        }, {
            readonly "@name": "CRC-32";
            readonly "@path": "\\(1-\\)CRC-32";
            readonly "@id": "0xBF";
            readonly "@type": "binary";
            readonly "@length": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The CRC is computed on all the data of the Master element it's in. The CRC element should be the first in it's parent master for easier reading. All level 1 elements should include a CRC-32. The CRC in use is the IEEE CRC32 Little Endian.";
            };
        }, {
            readonly "@name": "EBMLMaxIDLength";
            readonly "@path": "\\EBML\\EBMLMaxIDLength";
            readonly "@id": "0x42F2";
            readonly "@type": "uinteger";
            readonly "@range": "4";
            readonly "@default": "4";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
        }, {
            readonly "@name": "EBMLMaxSizeLength";
            readonly "@path": "\\EBML\\EBMLMaxSizeLength";
            readonly "@id": "0x42F3";
            readonly "@type": "uinteger";
            readonly "@range": "1-8";
            readonly "@default": "8";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
        }, {
            readonly "@name": "Segment";
            readonly "@path": "\\Segment";
            readonly "@id": "0x18538067";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly "@unknownsizeallowed": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `Root Element` that contains all other `Top-Level Elements`; see (#data-layout).";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "SeekHead";
            readonly "@path": "\\Segment\\SeekHead";
            readonly "@id": "0x114D9B74";
            readonly "@type": "master";
            readonly "@maxOccurs": "2";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains seeking information of `Top-Level Elements`; see (#data-layout).";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "Seek";
            readonly "@path": "\\Segment\\SeekHead\\Seek";
            readonly "@id": "0x4DBB";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains a single seek entry to an EBML Element.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "SeekID";
            readonly "@path": "\\Segment\\SeekHead\\Seek\\SeekID";
            readonly "@id": "0x53AB";
            readonly "@type": "binary";
            readonly "@length": "4";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The binary EBML ID of a `Top-Level Element`.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "SeekPosition";
            readonly "@path": "\\Segment\\SeekHead\\Seek\\SeekPosition";
            readonly "@id": "0x53AC";
            readonly "@type": "uinteger";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `Segment Position` ((#segment-position)) of a `Top-Level Element`.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "Info";
            readonly "@path": "\\Segment\\Info";
            readonly "@id": "0x1549A966";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly "@recurring": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains general information about the `Segment`.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "SegmentUUID";
            readonly "@path": "\\Segment\\Info\\SegmentUUID";
            readonly "@id": "0x73A4";
            readonly "@type": "binary";
            readonly "@length": "16";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A randomly generated UID that identifies the `Segment` amongst many others (128 bits). It is equivalent to a Universally Unique Identifier (UUID) v4 [@!RFC9562] with all bits randomly (or pseudorandomly) chosen. An actual UUID v4 value, where some bits are not random, **MAY** also be used.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "If the `Segment` is a part of a `Linked Segment`, then this element is **REQUIRED**.\nThe value of the UID **MUST** contain at least one bit set to 1.";
            }];
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "SegmentUID";
            };
        }, {
            readonly "@name": "SegmentFilename";
            readonly "@path": "\\Segment\\Info\\SegmentFilename";
            readonly "@id": "0x7384";
            readonly "@type": "utf-8";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A filename corresponding to this `Segment`.";
            };
        }, {
            readonly "@name": "PrevUUID";
            readonly "@path": "\\Segment\\Info\\PrevUUID";
            readonly "@id": "0x3CB923";
            readonly "@type": "binary";
            readonly "@length": "16";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "An ID that identifies the previous `Segment` of a `Linked Segment`.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "If the `Segment` is a part of a `Linked Segment` that uses\nHard Linking ((#hard-linking)), then either the\n`PrevUUID` or the `NextUUID` element is\n**REQUIRED**. If a `Segment` contains a `PrevUUID`\nbut not a `NextUUID`, then it **MAY** be considered as the\nlast `Segment` of the `Linked Segment`. The `PrevUUID`\n**MUST NOT** be equal to the `SegmentUUID`.";
            }];
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "PrevUID";
            };
        }, {
            readonly "@name": "PrevFilename";
            readonly "@path": "\\Segment\\Info\\PrevFilename";
            readonly "@id": "0x3C83AB";
            readonly "@type": "utf-8";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A filename corresponding to the file of the previous `Linked Segment`.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "Provision of the previous filename is for display convenience,\nbut `PrevUUID` **SHOULD** be considered authoritative for identifying the previous `Segment` in a `Linked Segment`.";
            }];
        }, {
            readonly "@name": "NextUUID";
            readonly "@path": "\\Segment\\Info\\NextUUID";
            readonly "@id": "0x3EB923";
            readonly "@type": "binary";
            readonly "@length": "16";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "An ID that identifies the next `Segment` of a `Linked Segment`.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "If the `Segment` is a part of a `Linked Segment` that uses Hard Linking ((#hard-linking)),\nthen either the `PrevUUID` or the `NextUUID` element is **REQUIRED**. If a `Segment` contains a `NextUUID` but not a `PrevUUID`, then it **MAY** be considered as the first `Segment` of the `Linked Segment`. The `NextUUID` **MUST NOT** be equal to the `SegmentUUID`.";
            }];
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "NextUID";
            };
        }, {
            readonly "@name": "NextFilename";
            readonly "@path": "\\Segment\\Info\\NextFilename";
            readonly "@id": "0x3E83BB";
            readonly "@type": "utf-8";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A filename corresponding to the file of the next `Linked Segment`.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "Provision of the next filename is for display convenience,\nbut `NextUUID` **SHOULD** be considered authoritative for identifying the Next `Segment`.";
            }];
        }, {
            readonly "@name": "SegmentFamily";
            readonly "@path": "\\Segment\\Info\\SegmentFamily";
            readonly "@id": "0x4444";
            readonly "@type": "binary";
            readonly "@length": "16";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A UID that all `Segments` of a `Linked Segment` **MUST** share (128 bits). It is equivalent to a UUID v4 [@!RFC9562] with all bits randomly (or pseudorandomly) chosen. An actual UUID v4 value, where some bits are not random, **MAY** also be used.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "If the `Segment` `Info` contains a `ChapterTranslate` element, this element is **REQUIRED**.";
            }];
        }, {
            readonly "@name": "ChapterTranslate";
            readonly "@path": "\\Segment\\Info\\ChapterTranslate";
            readonly "@id": "0x6924";
            readonly "@type": "master";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The mapping between this `Segment` and a\n segment value in the given Chapter Codec.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "rationale";
                readonly "#text": "Chapter Codecs may need to address different segments, but they may not know of the way to identify such segments when stored in Matroska.\nThis element and its child elements add a way to map the internal segments known to the Chapter Codec to the `SegmentUUID`s in Matroska.\nThis allows remuxing a file with Chapter Codec without changing the content of the codec data, just the `Segment` mapping.";
            }];
        }, {
            readonly "@name": "ChapterTranslateID";
            readonly "@path": "\\Segment\\Info\\ChapterTranslate\\ChapterTranslateID";
            readonly "@id": "0x69A5";
            readonly "@type": "binary";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The binary value used to represent this `Segment` in the chapter codec data.\nThe format depends on the `ChapProcessCodecID` used; see (#chapprocesscodecid-element).";
            };
        }, {
            readonly "@name": "ChapterTranslateCodec";
            readonly "@path": "\\Segment\\Info\\ChapterTranslate\\ChapterTranslateCodec";
            readonly "@id": "0x69BF";
            readonly "@type": "uinteger";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Applies to the chapter codec of the given chapter edition(s); see (#chapprocesscodecid-element).";
            };
            readonly extension: {
                readonly "@type": "enum source";
                readonly "@source": "Chapter Codec ID";
            };
        }, {
            readonly "@name": "ChapterTranslateEditionUID";
            readonly "@path": "\\Segment\\Info\\ChapterTranslate\\ChapterTranslateEditionUID";
            readonly "@id": "0x69FC";
            readonly "@type": "uinteger";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Specifies a chapter edition UID to which this `ChapterTranslate` applies.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "When no `ChapterTranslateEditionUID` is specified in the `ChapterTranslate`, the `ChapterTranslate` applies to all chapter editions found in the `Segment` using the given `ChapterTranslateCodec`.";
            }];
        }, {
            readonly "@name": "TimestampScale";
            readonly "@path": "\\Segment\\Info\\TimestampScale";
            readonly "@id": "0x2AD7B1";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@default": "1000000";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Base unit for Segment Ticks and Track Ticks, in nanoseconds. A `TimestampScale` value of 1000000 means scaled timestamps in the `Segment` are expressed in milliseconds; see (#timestamps) on how to interpret timestamps.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "TimecodeScale";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "Duration";
            readonly "@path": "\\Segment\\Info\\Duration";
            readonly "@id": "0x4489";
            readonly "@type": "float";
            readonly "@range": "> 0x0p+0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Duration of the `Segment`, expressed in `Segment` Ticks, which are based on `TimestampScale`; see (#timestamp-ticks).";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "DateUTC";
            readonly "@path": "\\Segment\\Info\\DateUTC";
            readonly "@id": "0x4461";
            readonly "@type": "date";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The date and time that the `Segment` was created by the muxing application or library.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "Title";
            readonly "@path": "\\Segment\\Info\\Title";
            readonly "@id": "0x7BA9";
            readonly "@type": "utf-8";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "General name of the `Segment`.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "MuxingApp";
            readonly "@path": "\\Segment\\Info\\MuxingApp";
            readonly "@id": "0x4D80";
            readonly "@type": "utf-8";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Muxing application or library (example: \"libmatroska-0.4.3\").";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "Include the full name of the application or library followed by the version number.";
            }];
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "WritingApp";
            readonly "@path": "\\Segment\\Info\\WritingApp";
            readonly "@id": "0x5741";
            readonly "@type": "utf-8";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Writing application (example: \"mkvmerge-0.3.3\").";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "Include the full name of the application followed by the version number.";
            }];
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "Cluster";
            readonly "@path": "\\Segment\\Cluster";
            readonly "@id": "0x1F43B675";
            readonly "@type": "master";
            readonly "@unknownsizeallowed": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `Top-Level Element` containing the (monolithic) `Block` structure.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "Timestamp";
            readonly "@path": "\\Segment\\Cluster\\Timestamp";
            readonly "@id": "0xE7";
            readonly "@type": "uinteger";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Absolute timestamp of the cluster, expressed in Segment Ticks, which are based on `TimestampScale`; see (#timestamp-ticks).";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "This element **SHOULD** be the first child element of the `Cluster` it belongs to\nor the second if that `Cluster` contains a `CRC-32` element ((#crc-32)).";
            }];
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "ClusterTimecode";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "SilentTracks";
            readonly "@path": "\\Segment\\Cluster\\SilentTracks";
            readonly "@id": "0x5854";
            readonly "@type": "master";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The list of tracks that are not used in that part of the stream.\nIt is useful when using overlay tracks for seeking or deciding what track to use.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "ClusterSilentTracks";
            };
        }, {
            readonly "@name": "SilentTrackNumber";
            readonly "@path": "\\Segment\\Cluster\\SilentTracks\\SilentTrackNumber";
            readonly "@id": "0x58D7";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "One of the track numbers that is not used from now on in the stream.\nIt could change later if not specified as silent in a further `Cluster`.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "ClusterSilentTrackNumber";
            };
        }, {
            readonly "@name": "Position";
            readonly "@path": "\\Segment\\Cluster\\Position";
            readonly "@id": "0xA7";
            readonly "@type": "uinteger";
            readonly "@maxver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `Segment Position` of the `Cluster` in the `Segment` (0 in live streams).\nIt might help to resynchronize the offset on damaged streams.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "ClusterPosition";
            };
        }, {
            readonly "@name": "PrevSize";
            readonly "@path": "\\Segment\\Cluster\\PrevSize";
            readonly "@id": "0xAB";
            readonly "@type": "uinteger";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Size of the previous `Cluster`, in octets. Can be useful for backward playing.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "ClusterPrevSize";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "SimpleBlock";
            readonly "@path": "\\Segment\\Cluster\\SimpleBlock";
            readonly "@id": "0xA3";
            readonly "@type": "binary";
            readonly "@minver": "2";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Similar to `Block` (see (#block-structure)) but without all the extra information.\nMostly used to reduce overhead when no extra feature is needed; see (#simpleblock-structure) on `SimpleBlock` Structure.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "divx.com";
                readonly "@divx": "1";
            }];
        }, {
            readonly "@name": "BlockGroup";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup";
            readonly "@id": "0xA0";
            readonly "@type": "master";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Basic container of information containing a single `Block` and information specific to that `Block`.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "Block";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\Block";
            readonly "@id": "0xA1";
            readonly "@type": "binary";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "`Block` containing the actual data to be rendered and a timestamp relative to the `Cluster` Timestamp;\nsee (#block-structure) on `Block` Structure.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "BlockVirtual";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\BlockVirtual";
            readonly "@id": "0xA2";
            readonly "@type": "binary";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A `Block` with no data. It must be stored in the stream at the place the real `Block` would be in display order.";
            };
        }, {
            readonly "@name": "BlockAdditions";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\BlockAdditions";
            readonly "@id": "0x75A1";
            readonly "@type": "master";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains additional binary data to complete the `Block` element; see [@?I-D.ietf-cellar-codec, section 4.1.5] for more information.\nAn EBML parser that has no knowledge of the `Block` structure could still see and use/skip these data.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "BlockMore";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\BlockAdditions\\BlockMore";
            readonly "@id": "0xA6";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains the `BlockAdditional` and some parameters.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "BlockAdditional";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\BlockAdditions\\BlockMore\\BlockAdditional";
            readonly "@id": "0xA5";
            readonly "@type": "binary";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Interpreted by the codec as it wishes (using the `BlockAddID`).";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "BlockAddID";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\BlockAdditions\\BlockMore\\BlockAddID";
            readonly "@id": "0xEE";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@default": "1";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "An ID that identifies how to interpret the `BlockAdditional` data; see [@?I-D.ietf-cellar-codec, section 4.1.5] for\n more information. A value of 1 indicates that the `BlockAdditional` data is\n defined by the codec. Any other value indicates that the `BlockAdditional` data\n should be handled according to the `BlockAddIDType` that is located in the\n`TrackEntry`.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "Each `BlockAddID` value **MUST** be unique between all `BlockMore` elements found in a `BlockAdditions` element. To keep `MaxBlockAdditionID` as low as possible, small values **SHOULD** be used.";
            }];
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "BlockDuration";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\BlockDuration";
            readonly "@id": "0x9B";
            readonly "@type": "uinteger";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The duration of the `Block`, expressed in Track Ticks; see (#timestamp-ticks).\nThe `BlockDuration` element can be useful\nat the end of a `Track` to define the duration of the last frame (as\nthere is no subsequent `Block` available) or when there is a break in a\ntrack like for subtitle tracks.";
            };
            readonly implementation_note: readonly [{
                readonly "@note_attribute": "minOccurs";
                readonly "#text": "`BlockDuration` **MUST** be set (minOccurs=1) if the associated `TrackEntry` stores a `DefaultDuration` value.";
            }, {
                readonly "@note_attribute": "default";
                readonly "#text": "If a value is not present and no `DefaultDuration` is defined, the value is assumed to be the difference between the timestamp of this `Block` and the timestamp of the next `Block` in \"display\" order (not coding order).";
            }];
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "ReferencePriority";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\ReferencePriority";
            readonly "@id": "0xFA";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "This frame is referenced and has the specified cache priority.\nIn the cache, only a frame of the same or higher priority can replace this frame. A value of 0 means the frame is not referenced.";
            };
        }, {
            readonly "@name": "ReferenceBlock";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\ReferenceBlock";
            readonly "@id": "0xFB";
            readonly "@type": "integer";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A timestamp value, relative to the timestamp of the `Block` in this `BlockGroup`, expressed in Track Ticks; see (#timestamp-ticks).\nThis is used to reference other frames necessary to decode this frame.\nThe relative value **SHOULD** correspond to a valid `Block` that this `Block` depends on.\nHistorically, `Matroska Writers` didn't write the actual `Block(s)` that this `Block` depends on, but they did write *some* `Block(s)` in the past.\n\nThe value \"0\" **MAY** also be used to signify that this `Block` cannot be decoded on its own, but the necessary reference `Block(s)` is unknown. In this case, other `ReferenceBlock` elements **MUST NOT** be found in the same `BlockGroup`. If the `BlockGroup` doesn't have a `ReferenceBlock` element, then the `Block` it contains can be decoded without using any other `Block` data.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "ReferenceVirtual";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\ReferenceVirtual";
            readonly "@id": "0xFD";
            readonly "@type": "integer";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `Segment Position` of the data that would otherwise be in position of the virtual block.";
            };
        }, {
            readonly "@name": "CodecState";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\CodecState";
            readonly "@id": "0xA4";
            readonly "@type": "binary";
            readonly "@minver": "2";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The new codec state to use. Data interpretation is private to the codec.\nThis information **SHOULD** always be referenced by a seek entry.";
            };
        }, {
            readonly "@name": "DiscardPadding";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\DiscardPadding";
            readonly "@id": "0x75A2";
            readonly "@type": "integer";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Duration of the silent data added to the `Block`, expressed in\n Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks)\n(padding at the end of the `Block` for positive values and at the\nbeginning of the `Block` for negative values). The duration of\n`DiscardPadding` is not calculated in the duration of the\n`TrackEntry` and **SHOULD** be discarded during\nplayback.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "Slices";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\Slices";
            readonly "@id": "0x8E";
            readonly "@type": "master";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains slices description.";
            };
        }, {
            readonly "@name": "TimeSlice";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\Slices\\TimeSlice";
            readonly "@id": "0xE8";
            readonly "@type": "master";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains extra time information about the data contained in the `Block`.\nBeing able to interpret this element is not required for playback.";
            };
        }, {
            readonly "@name": "LaceNumber";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\Slices\\TimeSlice\\LaceNumber";
            readonly "@id": "0xCC";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The reverse number of the frame in the lace (0 is the last frame, 1 is the next to last, etc.).\nBeing able to interpret this element is not required for playback.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "SliceLaceNumber";
            };
        }, {
            readonly "@name": "FrameNumber";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\Slices\\TimeSlice\\FrameNumber";
            readonly "@id": "0xCD";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@default": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The number of the frame to generate from this lace with this delay\n(allows for the generation of many frames from the same Block/Frame).";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "SliceFrameNumber";
            };
        }, {
            readonly "@name": "BlockAdditionID";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\Slices\\TimeSlice\\BlockAdditionID";
            readonly "@id": "0xCB";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@default": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The ID of the `BlockAdditional` element (0 is the main `Block`).";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "SliceBlockAddID";
            };
        }, {
            readonly "@name": "Delay";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\Slices\\TimeSlice\\Delay";
            readonly "@id": "0xCE";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@default": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The delay to apply to the element, expressed in Track Ticks; see (#timestamp-ticks).";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "SliceDelay";
            };
        }, {
            readonly "@name": "SliceDuration";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\Slices\\TimeSlice\\SliceDuration";
            readonly "@id": "0xCF";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@default": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The duration to apply to the element, expressed in Track Ticks; see (#timestamp-ticks).";
            };
        }, {
            readonly "@name": "ReferenceFrame";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\ReferenceFrame";
            readonly "@id": "0xC8";
            readonly "@type": "master";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains information about the last reference frame. See [@?DivXTrickTrack].";
            };
            readonly extension: {
                readonly "@type": "divx.com";
                readonly "@divx": "1";
            };
        }, {
            readonly "@name": "ReferenceOffset";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\ReferenceFrame\\ReferenceOffset";
            readonly "@id": "0xC9";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The relative offset, in bytes, from the previous `BlockGroup` element for this Smooth FF/RW video track to the containing `BlockGroup`\nelement. See [@?DivXTrickTrack].";
            };
            readonly extension: {
                readonly "@type": "divx.com";
                readonly "@divx": "1";
            };
        }, {
            readonly "@name": "ReferenceTimestamp";
            readonly "@path": "\\Segment\\Cluster\\BlockGroup\\ReferenceFrame\\ReferenceTimestamp";
            readonly "@id": "0xCA";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The timestamp of the `BlockGroup` pointed to by ReferenceOffset, expressed in Track Ticks; see (#timestamp-ticks). See [@?DivXTrickTrack].";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "ReferenceTimeCode";
            }, {
                readonly "@type": "divx.com";
                readonly "@divx": "1";
            }];
        }, {
            readonly "@name": "EncryptedBlock";
            readonly "@path": "\\Segment\\Cluster\\EncryptedBlock";
            readonly "@id": "0xAF";
            readonly "@type": "binary";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Similar to `SimpleBlock` (see (#simpleblock-structure)),\nbut the data inside the `Block` are Transformed (encrypted and/or signed).";
            };
        }, {
            readonly "@name": "Tracks";
            readonly "@path": "\\Segment\\Tracks";
            readonly "@id": "0x1654AE6B";
            readonly "@type": "master";
            readonly "@maxOccurs": "1";
            readonly "@recurring": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A `Top-Level Element` of information with many tracks described.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "TrackEntry";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry";
            readonly "@id": "0xAE";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Describes a track with all elements.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "TrackNumber";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackNumber";
            readonly "@id": "0xD7";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The track number as used in the `Block` Header.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "TrackUID";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackUID";
            readonly "@id": "0x73C5";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A UID that identifies the `Track`.";
            };
            readonly extension: readonly [{
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "TrackType";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackType";
            readonly "@id": "0x83";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `TrackType` defines the type of each frame found in the `Track`.\nThe value **SHOULD** be stored on 1 octet.";
            };
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Track Type";
                readonly "@policy": "Specification Required";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "1";
                    readonly "@label": "video";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "An image.";
                    };
                }, {
                    readonly "@value": "2";
                    readonly "@label": "audio";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Audio samples.";
                    };
                }, {
                    readonly "@value": "3";
                    readonly "@label": "complex";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "A mix of different other `TrackType`. The codec needs to define how the `Matroska Player` should interpret such data.";
                    };
                }, {
                    readonly "@value": "16";
                    readonly "@label": "logo";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "An image to be rendered over the video track(s).";
                    };
                }, {
                    readonly "@value": "17";
                    readonly "@label": "subtitle";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Subtitle or closed caption data to be rendered over the video track(s).";
                    };
                }, {
                    readonly "@value": "18";
                    readonly "@label": "buttons";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Interactive button(s) to be rendered over the video track(s).";
                    };
                }, {
                    readonly "@value": "32";
                    readonly "@label": "control";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Metadata used to control the player of the `Matroska Player`.";
                    };
                }, {
                    readonly "@value": "33";
                    readonly "@label": "metadata";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Timed metadata that can be passed on to the `Matroska Player`.";
                    };
                }];
            };
        }, {
            readonly "@name": "FlagEnabled";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\FlagEnabled";
            readonly "@id": "0xB9";
            readonly "@type": "uinteger";
            readonly "@minver": "2";
            readonly "@range": "0-1";
            readonly "@default": "1";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if the track is usable. It is possible to turn a track that is not usable into a usable track using chapter codecs or control tracks.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "TrackFlagEnabled";
            }];
        }, {
            readonly "@name": "FlagDefault";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\FlagDefault";
            readonly "@id": "0x88";
            readonly "@type": "uinteger";
            readonly "@range": "0-1";
            readonly "@default": "1";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if the track (audio, video, or subtitles) is eligible for automatic selection by the player; see (#default-track-selection) for more details.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "TrackFlagDefault";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "FlagForced";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\FlagForced";
            readonly "@id": "0x55AA";
            readonly "@type": "uinteger";
            readonly "@range": "0-1";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Applies only to subtitles. Set to 1 if the track is eligible for automatic selection by the player if it matches the user's language preference,\neven if the user's preferences would not normally enable subtitles with the selected audio track;\nthis can be used for tracks containing only translations of audio in foreign languages or on-screen text.\nSee (#default-track-selection) for more details.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "TrackFlagForced";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "FlagHearingImpaired";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\FlagHearingImpaired";
            readonly "@id": "0x55AB";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@range": "0-1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if and only if the track is suitable for users with hearing impairments.";
            };
        }, {
            readonly "@name": "FlagVisualImpaired";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\FlagVisualImpaired";
            readonly "@id": "0x55AC";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@range": "0-1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if and only if the track is suitable for users with visual impairments.";
            };
        }, {
            readonly "@name": "FlagTextDescriptions";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\FlagTextDescriptions";
            readonly "@id": "0x55AD";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@range": "0-1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if and only if the track contains textual descriptions of video content.";
            };
        }, {
            readonly "@name": "FlagOriginal";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\FlagOriginal";
            readonly "@id": "0x55AE";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@range": "0-1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if and only if the track is in the content's original language.";
            };
        }, {
            readonly "@name": "FlagCommentary";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\FlagCommentary";
            readonly "@id": "0x55AF";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@range": "0-1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if and only if the track contains commentary.";
            };
        }, {
            readonly "@name": "FlagLacing";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\FlagLacing";
            readonly "@id": "0x9C";
            readonly "@type": "uinteger";
            readonly "@range": "0-1";
            readonly "@default": "1";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if the track **MAY** contain blocks that use lacing.\n When set to 0, all blocks **MUST** have their lacing flags set to \"no lacing\"; see (#block-lacing) on 'Block' Lacing.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "TrackFlagLacing";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "MinCache";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\MinCache";
            readonly "@id": "0x6DE7";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The minimum number of frames a player should be able to cache during playback.\nIf set to 0, the reference pseudo-cache system is not used.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "TrackMinCache";
            };
        }, {
            readonly "@name": "MaxCache";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\MaxCache";
            readonly "@id": "0x6DF8";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The maximum cache size necessary to store referenced frames in and the current frame.\n0 means no cache is needed.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "TrackMaxCache";
            };
        }, {
            readonly "@name": "DefaultDuration";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\DefaultDuration";
            readonly "@id": "0x23E383";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Number of nanoseconds per frame, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks)\n(\"frame\" in the Matroska sense -- one element put into a (Simple)Block).";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "TrackDefaultDuration";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "DefaultDecodedFieldDuration";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\DefaultDecodedFieldDuration";
            readonly "@id": "0x234E7A";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@range": "not 0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The period between two successive fields at the output of the decoding process, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks).\nSee (#defaultdecodedfieldduration) for more information.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "TrackDefaultDecodedFieldDuration";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "TrackTimestampScale";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackTimestampScale";
            readonly "@id": "0x23314F";
            readonly "@type": "float";
            readonly "@maxver": "3";
            readonly "@range": "> 0x0p+0";
            readonly "@default": "0x1p+0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The scale to apply on this track to work at normal speed in relation with other tracks\n(mostly used to adjust video speed when the audio length differs).";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "TrackTimecodeScale";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "TrackOffset";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackOffset";
            readonly "@id": "0x537F";
            readonly "@type": "integer";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@default": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A value to add to the `Block`'s Timestamp, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks).\nThis can be used to adjust the playback offset of a track.";
            };
            readonly extension: {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            };
        }, {
            readonly "@name": "MaxBlockAdditionID";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\MaxBlockAdditionID";
            readonly "@id": "0x55EE";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The maximum value of `BlockAddID` ((#blockaddid-element)).\nA value of 0 means there is no `BlockAdditions` ((#blockadditions-element)) for this track.";
            };
        }, {
            readonly "@name": "BlockAdditionMapping";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\BlockAdditionMapping";
            readonly "@id": "0x41E4";
            readonly "@type": "master";
            readonly "@minver": "4";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains elements that extend the track format by adding content either to each frame,\nwith `BlockAddID` ((#blockaddid-element)), or to the track as a whole\nwith `BlockAddIDExtraData`.";
            };
        }, {
            readonly "@name": "BlockAddIDValue";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\BlockAdditionMapping\\BlockAddIDValue";
            readonly "@id": "0x41F0";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@range": ">=2";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "If the track format extension needs content beside frames,\nthe value refers to the `BlockAddID` ((#blockaddid-element)) value being described.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "To keep `MaxBlockAdditionID` as low as possible, small values **SHOULD** be used.";
            }];
        }, {
            readonly "@name": "BlockAddIDName";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\BlockAdditionMapping\\BlockAddIDName";
            readonly "@id": "0x41A4";
            readonly "@type": "string";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A human-friendly name describing the type of `BlockAdditional` data,\nas defined by the associated `Block Additional Mapping`.";
            };
        }, {
            readonly "@name": "BlockAddIDType";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\BlockAdditionMapping\\BlockAddIDType";
            readonly "@id": "0x41E7";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Stores the registered identifier of the `Block Additional Mapping`\nto define how the `BlockAdditional` data should be handled.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "If `BlockAddIDType` is 0, the `BlockAddIDValue` and corresponding `BlockAddID` values **MUST** be 1.";
            }];
        }, {
            readonly "@name": "BlockAddIDExtraData";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\BlockAdditionMapping\\BlockAddIDExtraData";
            readonly "@id": "0x41ED";
            readonly "@type": "binary";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Extra binary data that the `BlockAddIDType` can use to interpret the `BlockAdditional` data.\nThe interpretation of the binary data depends on the `BlockAddIDType` value and the corresponding `Block Additional Mapping`.";
            };
        }, {
            readonly "@name": "Name";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Name";
            readonly "@id": "0x536E";
            readonly "@type": "utf-8";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A human-readable track name.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "TrackName";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "Language";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Language";
            readonly "@id": "0x22B59C";
            readonly "@type": "string";
            readonly "@default": "eng";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The language of the track,\nin the Matroska languages form; see (#language-codes) on language codes.\nThis element **MUST** be ignored if the `LanguageBCP47` element is used in the same `TrackEntry`.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "TrackLanguage";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "LanguageBCP47";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\LanguageBCP47";
            readonly "@id": "0x22B59D";
            readonly "@type": "string";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The language of the track,\nin the form defined in [@!RFC5646]; see (#language-codes) on language codes.\nIf this element is used, then any `Language` elements used in the same `TrackEntry` **MUST** be ignored.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "LanguageIETF";
            };
        }, {
            readonly "@name": "CodecID";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\CodecID";
            readonly "@id": "0x86";
            readonly "@type": "string";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "An ID corresponding to the codec;\nsee [@?I-D.ietf-cellar-codec] for more info.";
            };
            readonly extension: readonly [{
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "CodecPrivate";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\CodecPrivate";
            readonly "@id": "0x63A2";
            readonly "@type": "binary";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Private data only known to the codec.";
            };
            readonly extension: readonly [{
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "CodecName";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\CodecName";
            readonly "@id": "0x258688";
            readonly "@type": "utf-8";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A human-readable string specifying the codec.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "AttachmentLink";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\AttachmentLink";
            readonly "@id": "0x7446";
            readonly "@type": "uinteger";
            readonly "@maxver": "3";
            readonly "@range": "not 0";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The UID of an attachment that is used by this codec.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "The value **MUST** match the `FileUID` value of an attachment found in this `Segment`.";
            }];
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "TrackAttachmentLink";
            };
        }, {
            readonly "@name": "CodecSettings";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\CodecSettings";
            readonly "@id": "0x3A9697";
            readonly "@type": "utf-8";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A string describing the encoding setting used.";
            };
        }, {
            readonly "@name": "CodecInfoURL";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\CodecInfoURL";
            readonly "@id": "0x3B4040";
            readonly "@type": "string";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A URL to find information about the codec used.";
            };
        }, {
            readonly "@name": "CodecDownloadURL";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\CodecDownloadURL";
            readonly "@id": "0x26B240";
            readonly "@type": "string";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A URL to download information about the codec used.";
            };
        }, {
            readonly "@name": "CodecDecodeAll";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\CodecDecodeAll";
            readonly "@id": "0xAA";
            readonly "@type": "uinteger";
            readonly "@maxver": "0";
            readonly "@range": "0-1";
            readonly "@default": "1";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if the codec can decode potentially damaged data.";
            };
        }, {
            readonly "@name": "TrackOverlay";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackOverlay";
            readonly "@id": "0x6FAB";
            readonly "@type": "uinteger";
            readonly "@maxver": "0";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Specify that this track is an overlay track for the `Track` specified (in the u-integer).\nThis means that when this track has a gap on `SilentTracks`, the overlay track should be used instead. The order of multiple `TrackOverlay` matters; the first one is the one that should be used.\nIf the first one is not found, it should be the second, etc.";
            };
        }, {
            readonly "@name": "CodecDelay";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\CodecDelay";
            readonly "@id": "0x56AA";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The built-in delay for the codec, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks).\nIt represents the number of codec samples that will be discarded by the decoder during playback.\nThis timestamp value **MUST** be subtracted from each frame timestamp in order to get the timestamp that will be actually played.\nThe value **SHOULD** be small so the muxing of tracks with the same actual timestamp are in the same `Cluster`.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "SeekPreRoll";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\SeekPreRoll";
            readonly "@id": "0x56BB";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "After a discontinuity, the duration of the data\nthat the decoder **MUST** decode before the decoded data is valid, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks).";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "TrackTranslate";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackTranslate";
            readonly "@id": "0x6624";
            readonly "@type": "master";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The mapping between this `TrackEntry` and a track value in the given Chapter Codec.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "rationale";
                readonly "#text": "Chapter Codecs may need to address content in a specific track, but they may not know of the way to identify tracks in Matroska.\nThis element and its child elements add a way to map the internal tracks known to the Chapter Codec to the track IDs in Matroska.\nThis allows remuxing a file with Chapter Codec without changing the content of the codec data, just the track mapping.";
            }];
        }, {
            readonly "@name": "TrackTranslateTrackID";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackTranslate\\TrackTranslateTrackID";
            readonly "@id": "0x66A5";
            readonly "@type": "binary";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The binary value used to represent this `TrackEntry` in the chapter codec data.\nThe format depends on the `ChapProcessCodecID` used; see (#chapprocesscodecid-element).";
            };
        }, {
            readonly "@name": "TrackTranslateCodec";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackTranslate\\TrackTranslateCodec";
            readonly "@id": "0x66BF";
            readonly "@type": "uinteger";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Applies to the chapter codec of the given chapter edition(s); see (#chapprocesscodecid-element).";
            };
            readonly extension: {
                readonly "@type": "enum source";
                readonly "@source": "Chapter Codec ID";
            };
        }, {
            readonly "@name": "TrackTranslateEditionUID";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackTranslate\\TrackTranslateEditionUID";
            readonly "@id": "0x66FC";
            readonly "@type": "uinteger";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Specifies a chapter edition UID to which this `TrackTranslate` applies.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "When no `TrackTranslateEditionUID` is specified in the `TrackTranslate`, the `TrackTranslate` applies to all chapter editions found in the `Segment` using the given `TrackTranslateCodec`.";
            }];
        }, {
            readonly "@name": "Video";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video";
            readonly "@id": "0xE0";
            readonly "@type": "master";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Video settings.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "TrackVideo";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "FlagInterlaced";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\FlagInterlaced";
            readonly "@id": "0x9A";
            readonly "@type": "uinteger";
            readonly "@minver": "2";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Specifies whether the video frames in this track are interlaced.";
            };
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "undetermined";
                    readonly documentation: readonly [{
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Unknown status.";
                    }, {
                        readonly "@lang": "en";
                        readonly "@purpose": "usage notes";
                        readonly "#text": "This value **SHOULD** be avoided.";
                    }];
                }, {
                    readonly "@value": "1";
                    readonly "@label": "interlaced";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Interlaced frames.";
                    };
                }, {
                    readonly "@value": "2";
                    readonly "@label": "progressive";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "No interlacing.";
                    };
                }];
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoFlagInterlaced";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "FieldOrder";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\FieldOrder";
            readonly "@id": "0x9D";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@default": "2";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Specifies the field ordering of video frames in this track.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "If `FlagInterlaced` is not set to 1, this element **MUST** be ignored.";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "progressive";
                    readonly documentation: readonly [{
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Interlaced frames.";
                    }, {
                        readonly "@lang": "en";
                        readonly "@purpose": "usage notes";
                        readonly "#text": "This value **SHOULD** be avoided; setting `FlagInterlaced` to 2 is sufficient.";
                    }];
                }, {
                    readonly "@value": "1";
                    readonly "@label": "tff";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Top field displayed first. Top field stored first.";
                    };
                }, {
                    readonly "@value": "2";
                    readonly "@label": "undetermined";
                    readonly documentation: readonly [{
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Unknown field order.";
                    }, {
                        readonly "@lang": "en";
                        readonly "@purpose": "usage notes";
                        readonly "#text": "This value **SHOULD** be avoided.";
                    }];
                }, {
                    readonly "@value": "6";
                    readonly "@label": "bff";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Bottom field displayed first. Bottom field stored first.";
                    };
                }, {
                    readonly "@value": "9";
                    readonly "@label": "tff (interleaved)";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Top field displayed first. Fields are interleaved in storage with the top line of the top field stored first.";
                    };
                }, {
                    readonly "@value": "14";
                    readonly "@label": "bff (interleaved)";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Bottom field displayed first. Fields are interleaved in storage with the top line of the top field stored first.";
                    };
                }];
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoFieldOrder";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "StereoMode";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\StereoMode";
            readonly "@id": "0x53B8";
            readonly "@type": "uinteger";
            readonly "@minver": "3";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Stereo-3D video mode. See (#multi-planar-and-3d-videos) for more details.";
            };
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Stereo Mode";
                readonly "@policy": "Specification Required";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoStereoMode";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "mono";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "side by side (left eye first)";
                }, {
                    readonly "@value": "2";
                    readonly "@label": "top - bottom (right eye is first)";
                }, {
                    readonly "@value": "3";
                    readonly "@label": "top - bottom (left eye is first)";
                }, {
                    readonly "@value": "4";
                    readonly "@label": "checkboard (right eye is first)";
                }, {
                    readonly "@value": "5";
                    readonly "@label": "checkboard (left eye is first)";
                }, {
                    readonly "@value": "6";
                    readonly "@label": "row interleaved (right eye is first)";
                }, {
                    readonly "@value": "7";
                    readonly "@label": "row interleaved (left eye is first)";
                }, {
                    readonly "@value": "8";
                    readonly "@label": "column interleaved (right eye is first)";
                }, {
                    readonly "@value": "9";
                    readonly "@label": "column interleaved (left eye is first)";
                }, {
                    readonly "@value": "10";
                    readonly "@label": "anaglyph (cyan/red)";
                }, {
                    readonly "@value": "11";
                    readonly "@label": "side by side (right eye first)";
                }, {
                    readonly "@value": "12";
                    readonly "@label": "anaglyph (green/magenta)";
                }, {
                    readonly "@value": "13";
                    readonly "@label": "both eyes laced in one Block (left eye is first)";
                }, {
                    readonly "@value": "14";
                    readonly "@label": "both eyes laced in one Block (right eye is first)";
                }];
            };
        }, {
            readonly "@name": "AlphaMode";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\AlphaMode";
            readonly "@id": "0x53C0";
            readonly "@type": "uinteger";
            readonly "@minver": "3";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Indicates whether the `BlockAdditional` element with `BlockAddID` of \"1\"\n contains Alpha data as defined by the Codec Mapping for the `CodecID`.\n Undefined values (i.e., values other than 0 or 1) **SHOULD NOT** be used, as the\n behavior of known implementations is different.";
            };
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Alpha Mode";
                readonly "@policy": "First Come First Served";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoAlphaMode";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "none";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "The `BlockAdditional` element with `BlockAddID` of \"1\" does not exist or **SHOULD NOT** be considered as containing such data.";
                    };
                }, {
                    readonly "@value": "1";
                    readonly "@label": "present";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "The `BlockAdditional` element with `BlockAddID` of \"1\" contains alpha channel data.";
                    };
                }];
            };
        }, {
            readonly "@name": "OldStereoMode";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\OldStereoMode";
            readonly "@id": "0x53B9";
            readonly "@type": "uinteger";
            readonly "@maxver": "2";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Bogus `StereoMode` value used in old versions of [@?libmatroska].";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "This element **MUST NOT** be used. It was an incorrect value used in libmatroska up to 0.9.0.";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "mono";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "right eye";
                }, {
                    readonly "@value": "2";
                    readonly "@label": "left eye";
                }, {
                    readonly "@value": "3";
                    readonly "@label": "both eyes";
                }];
            };
        }, {
            readonly "@name": "PixelWidth";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\PixelWidth";
            readonly "@id": "0xB0";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Width of the encoded video frames in pixels.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoPixelWidth";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "PixelHeight";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\PixelHeight";
            readonly "@id": "0xBA";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Height of the encoded video frames in pixels.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoPixelHeight";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "PixelCropBottom";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\PixelCropBottom";
            readonly "@id": "0x54AA";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The number of video pixels to remove at the bottom of the image.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoPixelCropBottom";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "PixelCropTop";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\PixelCropTop";
            readonly "@id": "0x54BB";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The number of video pixels to remove at the top of the image.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoPixelCropTop";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "PixelCropLeft";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\PixelCropLeft";
            readonly "@id": "0x54CC";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The number of video pixels to remove on the left of the image.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoPixelCropLeft";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "PixelCropRight";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\PixelCropRight";
            readonly "@id": "0x54DD";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The number of video pixels to remove on the right of the image.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoPixelCropRight";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "DisplayWidth";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\DisplayWidth";
            readonly "@id": "0x54B0";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Width of the video frames to display. Applies to the video frame after cropping (PixelCrop* Elements).";
            };
            readonly implementation_note: {
                readonly "@note_attribute": "default";
                readonly "#text": "If the DisplayUnit of the same `TrackEntry` is 0, then the default value for `DisplayWidth` is equal to `PixelWidth` - `PixelCropLeft` - `PixelCropRight`; else, there is no default value.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoDisplayWidth";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "DisplayHeight";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\DisplayHeight";
            readonly "@id": "0x54BA";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Height of the video frames to display. Applies to the video frame after cropping (PixelCrop* Elements).";
            };
            readonly implementation_note: {
                readonly "@note_attribute": "default";
                readonly "#text": "If the DisplayUnit of the same `TrackEntry` is 0, then the default value for `DisplayHeight` is equal to `PixelHeight` - `PixelCropTop` - `PixelCropBottom`; else, there is no default value.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoDisplayHeight";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "DisplayUnit";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\DisplayUnit";
            readonly "@id": "0x54B2";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "How `DisplayWidth` and `DisplayHeight` are interpreted.";
            };
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Display Unit";
                readonly "@policy": "Specification Required";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoDisplayUnit";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "pixels";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "centimeters";
                }, {
                    readonly "@value": "2";
                    readonly "@label": "inches";
                }, {
                    readonly "@value": "3";
                    readonly "@label": "display aspect ratio";
                }, {
                    readonly "@value": "4";
                    readonly "@label": "unknown";
                }];
            };
        }, {
            readonly "@name": "AspectRatioType";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\AspectRatioType";
            readonly "@id": "0x54B3";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@default": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Specifies the possible modifications to the aspect ratio.";
            };
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "free resizing";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "keep aspect ratio";
                }, {
                    readonly "@value": "2";
                    readonly "@label": "fixed";
                }];
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoAspectRatio";
            };
        }, {
            readonly "@name": "UncompressedFourCC";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\UncompressedFourCC";
            readonly "@id": "0x2EB524";
            readonly "@type": "binary";
            readonly "@length": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Specifies the uncompressed pixel format used for the `Track`'s data as a FourCC.\nThis value is similar in scope to the biCompression value of AVI's `BITMAPINFO` [@?AVIFormat]. There is neither a definitive list of FourCC values nor an official registry. Some common values for YUV pixel formats can be found at [@?MSYUV8], [@?MSYUV16], and [@?FourCC-YUV]. Some common values for uncompressed RGB pixel formats can be found at [@?MSRGB] and [@?FourCC-RGB].";
            };
            readonly implementation_note: {
                readonly "@note_attribute": "minOccurs";
                readonly "#text": "UncompressedFourCC **MUST** be set (minOccurs=1) in `TrackEntry` when the `CodecID` element of the `TrackEntry` is set to \"V_UNCOMPRESSED\".";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoColourSpace";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "GammaValue";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\GammaValue";
            readonly "@id": "0x2FB523";
            readonly "@type": "float";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@range": "> 0x0p+0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Gamma value.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoGamma";
            };
        }, {
            readonly "@name": "FrameRate";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\FrameRate";
            readonly "@id": "0x2383E3";
            readonly "@type": "float";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@range": "> 0x0p+0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Number of frames per second. This value is informational only. It is intended for constant frame rate streams and should not be\n used for a variable frame rate `TrackEntry`.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoFrameRate";
            };
        }, {
            readonly "@name": "Colour";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour";
            readonly "@id": "0x55B0";
            readonly "@type": "master";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Settings describing the color format.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoColour";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "MatrixCoefficients";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MatrixCoefficients";
            readonly "@id": "0x55B1";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@default": "2";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The Matrix Coefficients of the video used to derive luma and chroma values from red, green, and blue color primaries.\nFor clarity, the value and meanings for `MatrixCoefficients` are adopted from Table 4 of [@!ITU-H.273].";
            };
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "Identity";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "ITU-R BT.709";
                }, {
                    readonly "@value": "2";
                    readonly "@label": "unspecified";
                }, {
                    readonly "@value": "3";
                    readonly "@label": "reserved";
                }, {
                    readonly "@value": "4";
                    readonly "@label": "US FCC 73.682";
                }, {
                    readonly "@value": "5";
                    readonly "@label": "ITU-R BT.470BG";
                }, {
                    readonly "@value": "6";
                    readonly "@label": "SMPTE 170M";
                }, {
                    readonly "@value": "7";
                    readonly "@label": "SMPTE 240M";
                }, {
                    readonly "@value": "8";
                    readonly "@label": "YCoCg";
                }, {
                    readonly "@value": "9";
                    readonly "@label": "BT2020 Non-constant Luminance";
                }, {
                    readonly "@value": "10";
                    readonly "@label": "BT2020 Constant Luminance";
                }, {
                    readonly "@value": "11";
                    readonly "@label": "SMPTE ST 2085";
                }, {
                    readonly "@value": "12";
                    readonly "@label": "Chroma-derived Non-constant Luminance";
                }, {
                    readonly "@value": "13";
                    readonly "@label": "Chroma-derived Constant Luminance";
                }, {
                    readonly "@value": "14";
                    readonly "@label": "ITU-R BT.2100-0";
                }];
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoColourMatrix";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "BitsPerChannel";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\BitsPerChannel";
            readonly "@id": "0x55B2";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Number of decoded bits per channel. A value of 0 indicates that the `BitsPerChannel` is unspecified.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoBitsPerChannel";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "ChromaSubsamplingHorz";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\ChromaSubsamplingHorz";
            readonly "@id": "0x55B3";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The number of pixels to remove in the Cr and Cb channels for every pixel not removed horizontally. Example: For video with 4:2:0 chroma subsampling, the `ChromaSubsamplingHorz`\n **SHOULD** be set to 1.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoChromaSubsampHorz";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "ChromaSubsamplingVert";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\ChromaSubsamplingVert";
            readonly "@id": "0x55B4";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The number of pixels to remove in the Cr and Cb channels for every pixel not removed vertically.\nExample: For video with 4:2:0 chroma subsampling, the `ChromaSubsamplingVert`\n**SHOULD** be set to 1.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoChromaSubsampVert";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "CbSubsamplingHorz";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\CbSubsamplingHorz";
            readonly "@id": "0x55B5";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The number of pixels to remove in the Cb channel for every pixel not removed horizontally.\nThis is additive with `ChromaSubsamplingHorz`.\nExample: For video with 4:2:1 chroma\nsubsampling, the `ChromaSubsamplingHorz` **SHOULD** be set to 1, and `CbSubsamplingHorz` **SHOULD** be set to 1.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoCbSubsampHorz";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "CbSubsamplingVert";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\CbSubsamplingVert";
            readonly "@id": "0x55B6";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The number of pixels to remove in the Cb channel for every pixel not removed vertically.\nThis is additive with `ChromaSubsamplingVert`.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoCbSubsampVert";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "ChromaSitingHorz";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\ChromaSitingHorz";
            readonly "@id": "0x55B7";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "How chroma is subsampled horizontally.";
            };
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Horizontal Chroma Siting";
                readonly "@policy": "First Come First Served";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoChromaSitHorz";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "unspecified";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "left collocated";
                }, {
                    readonly "@value": "2";
                    readonly "@label": "half";
                }];
            };
        }, {
            readonly "@name": "ChromaSitingVert";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\ChromaSitingVert";
            readonly "@id": "0x55B8";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "How chroma is subsampled vertically.";
            };
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Vertical Chroma Siting";
                readonly "@policy": "First Come First Served";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoChromaSitVert";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "unspecified";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "top collocated";
                }, {
                    readonly "@value": "2";
                    readonly "@label": "half";
                }];
            };
        }, {
            readonly "@name": "Range";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\Range";
            readonly "@id": "0x55B9";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Clipping of the color ranges.";
            };
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Color Range";
                readonly "@policy": "Specification Required";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoColourRange";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "unspecified";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "broadcast range";
                }, {
                    readonly "@value": "2";
                    readonly "@label": "full range (no clipping)";
                }, {
                    readonly "@value": "3";
                    readonly "@label": "defined by MatrixCoefficients / TransferCharacteristics";
                }];
            };
        }, {
            readonly "@name": "TransferCharacteristics";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\TransferCharacteristics";
            readonly "@id": "0x55BA";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@default": "2";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The transfer characteristics of the video. For clarity,\nthe value and meanings for `TransferCharacteristics` are adopted from Table 3 of [@!ITU-H.273].";
            };
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "reserved";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "ITU-R BT.709";
                }, {
                    readonly "@value": "2";
                    readonly "@label": "unspecified";
                }, {
                    readonly "@value": "3";
                    readonly "@label": "reserved2";
                }, {
                    readonly "@value": "4";
                    readonly "@label": "Gamma 2.2 curve - BT.470M";
                }, {
                    readonly "@value": "5";
                    readonly "@label": "Gamma 2.8 curve - BT.470BG";
                }, {
                    readonly "@value": "6";
                    readonly "@label": "SMPTE 170M";
                }, {
                    readonly "@value": "7";
                    readonly "@label": "SMPTE 240M";
                }, {
                    readonly "@value": "8";
                    readonly "@label": "Linear";
                }, {
                    readonly "@value": "9";
                    readonly "@label": "Log";
                }, {
                    readonly "@value": "10";
                    readonly "@label": "Log Sqrt";
                }, {
                    readonly "@value": "11";
                    readonly "@label": "IEC 61966-2-4";
                }, {
                    readonly "@value": "12";
                    readonly "@label": "ITU-R BT.1361 Extended Colour Gamut";
                }, {
                    readonly "@value": "13";
                    readonly "@label": "IEC 61966-2-1";
                }, {
                    readonly "@value": "14";
                    readonly "@label": "ITU-R BT.2020 10 bit";
                }, {
                    readonly "@value": "15";
                    readonly "@label": "ITU-R BT.2020 12 bit";
                }, {
                    readonly "@value": "16";
                    readonly "@label": "ITU-R BT.2100 Perceptual Quantization";
                }, {
                    readonly "@value": "17";
                    readonly "@label": "SMPTE ST 428-1";
                }, {
                    readonly "@value": "18";
                    readonly "@label": "ARIB STD-B67 (HLG)";
                }];
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoColourTransferCharacter";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "Primaries";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\Primaries";
            readonly "@id": "0x55BB";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@default": "2";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The color primaries of the video. For clarity,\nthe value and meanings for `Primaries` are adopted from Table 2 of [@!ITU-H.273].";
            };
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "reserved";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "ITU-R BT.709";
                }, {
                    readonly "@value": "2";
                    readonly "@label": "unspecified";
                }, {
                    readonly "@value": "3";
                    readonly "@label": "reserved2";
                }, {
                    readonly "@value": "4";
                    readonly "@label": "ITU-R BT.470M";
                }, {
                    readonly "@value": "5";
                    readonly "@label": "ITU-R BT.470BG - BT.601 625";
                }, {
                    readonly "@value": "6";
                    readonly "@label": "ITU-R BT.601 525 - SMPTE 170M";
                }, {
                    readonly "@value": "7";
                    readonly "@label": "SMPTE 240M";
                }, {
                    readonly "@value": "8";
                    readonly "@label": "FILM";
                }, {
                    readonly "@value": "9";
                    readonly "@label": "ITU-R BT.2020";
                }, {
                    readonly "@value": "10";
                    readonly "@label": "SMPTE ST 428-1";
                }, {
                    readonly "@value": "11";
                    readonly "@label": "SMPTE RP 432-2";
                }, {
                    readonly "@value": "12";
                    readonly "@label": "SMPTE EG 432-2";
                }, {
                    readonly "@value": "22";
                    readonly "@label": "EBU Tech. 3213-E - JEDEC P22 phosphors";
                }];
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoColourPrimaries";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "MaxCLL";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MaxCLL";
            readonly "@id": "0x55BC";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Maximum brightness of a single pixel (Maximum Content Light Level)\nin candelas per square meter (cd/m^2^).";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoColourMaxCLL";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "MaxFALL";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MaxFALL";
            readonly "@id": "0x55BD";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Maximum brightness of a single full frame (Maximum Frame-Average Light Level)\nin candelas per square meter (cd/m^2^).";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoColourMaxFALL";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "MasteringMetadata";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata";
            readonly "@id": "0x55D0";
            readonly "@type": "master";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "SMPTE 2086 mastering data.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoColourMasterMeta";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "PrimaryRChromaticityX";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\PrimaryRChromaticityX";
            readonly "@id": "0x55D1";
            readonly "@type": "float";
            readonly "@minver": "4";
            readonly "@range": "0x0p+0-0x1p+0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Red X chromaticity coordinate, as defined by [@!CIE-1931].";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoRChromaX";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "PrimaryRChromaticityY";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\PrimaryRChromaticityY";
            readonly "@id": "0x55D2";
            readonly "@type": "float";
            readonly "@minver": "4";
            readonly "@range": "0x0p+0-0x1p+0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Red Y chromaticity coordinate, as defined by [@!CIE-1931].";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoRChromaY";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "PrimaryGChromaticityX";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\PrimaryGChromaticityX";
            readonly "@id": "0x55D3";
            readonly "@type": "float";
            readonly "@minver": "4";
            readonly "@range": "0x0p+0-0x1p+0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Green X chromaticity coordinate, as defined by [@!CIE-1931].";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoGChromaX";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "PrimaryGChromaticityY";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\PrimaryGChromaticityY";
            readonly "@id": "0x55D4";
            readonly "@type": "float";
            readonly "@minver": "4";
            readonly "@range": "0x0p+0-0x1p+0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Green Y chromaticity coordinate, as defined by [@!CIE-1931].";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoGChromaY";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "PrimaryBChromaticityX";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\PrimaryBChromaticityX";
            readonly "@id": "0x55D5";
            readonly "@type": "float";
            readonly "@minver": "4";
            readonly "@range": "0x0p+0-0x1p+0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Blue X chromaticity coordinate, as defined by [@!CIE-1931].";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoBChromaX";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "PrimaryBChromaticityY";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\PrimaryBChromaticityY";
            readonly "@id": "0x55D6";
            readonly "@type": "float";
            readonly "@minver": "4";
            readonly "@range": "0x0p+0-0x1p+0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Blue Y chromaticity coordinate, as defined by [@!CIE-1931].";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoBChromaY";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "WhitePointChromaticityX";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\WhitePointChromaticityX";
            readonly "@id": "0x55D7";
            readonly "@type": "float";
            readonly "@minver": "4";
            readonly "@range": "0x0p+0-0x1p+0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "White X chromaticity coordinate, as defined by [@!CIE-1931].";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoWhitePointChromaX";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "WhitePointChromaticityY";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\WhitePointChromaticityY";
            readonly "@id": "0x55D8";
            readonly "@type": "float";
            readonly "@minver": "4";
            readonly "@range": "0x0p+0-0x1p+0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "White Y chromaticity coordinate, as defined by [@!CIE-1931].";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoWhitePointChromaY";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "LuminanceMax";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\LuminanceMax";
            readonly "@id": "0x55D9";
            readonly "@type": "float";
            readonly "@minver": "4";
            readonly "@range": ">= 0x0p+0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Maximum luminance. Represented in candelas per square meter (cd/m^2^).";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoLuminanceMax";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "LuminanceMin";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Colour\\MasteringMetadata\\LuminanceMin";
            readonly "@id": "0x55DA";
            readonly "@type": "float";
            readonly "@minver": "4";
            readonly "@range": ">= 0x0p+0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Minimum luminance. Represented in candelas per square meter (cd/m^2^).";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoLuminanceMin";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "Projection";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Projection";
            readonly "@id": "0x7670";
            readonly "@type": "master";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Describes the video projection details. Used to render spherical or VR videos or to flip videos horizontally or vertically.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoProjection";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "ProjectionType";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Projection\\ProjectionType";
            readonly "@id": "0x7671";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Describes the projection used for this video track.";
            };
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Projection Type";
                readonly "@policy": "First Come First Served";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoProjectionType";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "rectangular";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "equirectangular";
                }, {
                    readonly "@value": "2";
                    readonly "@label": "cubemap";
                }, {
                    readonly "@value": "3";
                    readonly "@label": "mesh";
                }];
            };
        }, {
            readonly "@name": "ProjectionPrivate";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Projection\\ProjectionPrivate";
            readonly "@id": "0x7672";
            readonly "@type": "binary";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Private data that only applies to a specific projection.\n* If `ProjectionType` equals 0 (rectangular),\n then this element **MUST NOT** be present.\n* If `ProjectionType` equals 1 (equirectangular), then this element **MUST** be present and contain the same binary data that would be stored inside\n an ISOBMFF Equirectangular Projection Box (\"equi\").\n* If `ProjectionType` equals 2 (cubemap), then this element **MUST** be present and contain the same binary data that would be stored\n inside an ISOBMFF Cubemap Projection Box (\"cbmp\").\n* If `ProjectionType` equals 3 (mesh), then this element **MUST** be present and contain the same binary data that would be stored inside\n an ISOBMFF Mesh Projection Box (\"mshp\").";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "ISOBMFF box size and FourCC fields are not included in the binary data,\nbut the FullBox version and flag fields are. This is to avoid\nredundant framing information while preserving versioning and semantics between the two container formats.";
            }];
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoProjectionPrivate";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "ProjectionPoseYaw";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Projection\\ProjectionPoseYaw";
            readonly "@id": "0x7673";
            readonly "@type": "float";
            readonly "@minver": "4";
            readonly "@range": ">= -0xB4p+0, <= 0xB4p+0";
            readonly "@default": "0x0p+0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Specifies a yaw rotation to the projection. Value represents a clockwise rotation, in degrees, around the up vector. This rotation must be applied\nbefore any `ProjectionPosePitch` or `ProjectionPoseRoll` rotations.\nThe value of this element **MUST** be in the -180 to 180 degree range, both inclusive.\n\nSetting `ProjectionPoseYaw` to 180 or -180 degrees with `ProjectionPoseRoll` and `ProjectionPosePitch` set to 0 degrees flips the image horizontally.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoProjectionPoseYaw";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "ProjectionPosePitch";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Projection\\ProjectionPosePitch";
            readonly "@id": "0x7674";
            readonly "@type": "float";
            readonly "@minver": "4";
            readonly "@range": ">= -0x5Ap+0, <= 0x5Ap+0";
            readonly "@default": "0x0p+0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Specifies a pitch rotation to the projection. Value represents a counter-clockwise rotation, in degrees, around the right vector. This rotation must be applied\nafter the `ProjectionPoseYaw` rotation and before the `ProjectionPoseRoll` rotation.\nThe value of this element **MUST** be in the -90 to 90 degree range, both inclusive.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoProjectionPosePitch";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "ProjectionPoseRoll";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Video\\Projection\\ProjectionPoseRoll";
            readonly "@id": "0x7675";
            readonly "@type": "float";
            readonly "@minver": "4";
            readonly "@range": ">= -0xB4p+0, <= 0xB4p+0";
            readonly "@default": "0x0p+0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Specifies a roll rotation to the projection. Value represents a\n counter-clockwise rotation, in degrees, around the forward vector. This\n rotation must be applied after the `ProjectionPoseYaw` and\n `ProjectionPosePitch` rotations. The value of this element\n **MUST** be in the -180 to 180 degree range, both inclusive. Setting `ProjectionPoseRoll` to 180 or -180 degrees and\n `ProjectionPoseYaw` to 180 or -180 degrees with\n `ProjectionPosePitch` set to 0 degrees flips the image vertically.\n Setting `ProjectionPoseRoll` to 180 or -180 degrees with\n `ProjectionPoseYaw` and `ProjectionPosePitch` set to 0 degrees\n flips the image horizontally and vertically.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "VideoProjectionPoseRoll";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "Audio";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Audio";
            readonly "@id": "0xE1";
            readonly "@type": "master";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Audio settings.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "TrackAudio";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "SamplingFrequency";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Audio\\SamplingFrequency";
            readonly "@id": "0xB5";
            readonly "@type": "float";
            readonly "@range": "> 0x0p+0";
            readonly "@default": "0x1.f4p+12";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Sampling frequency in Hz.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "AudioSamplingFreq";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "OutputSamplingFrequency";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Audio\\OutputSamplingFrequency";
            readonly "@id": "0x78B5";
            readonly "@type": "float";
            readonly "@range": "> 0x0p+0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Real output sampling frequency in Hz that is used for Spectral Band Replication (SBR) techniques.";
            };
            readonly implementation_note: {
                readonly "@note_attribute": "default";
                readonly "#text": "The default value for `OutputSamplingFrequency` of the same `TrackEntry` is equal to the `SamplingFrequency`.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "AudioOutputSamplingFreq";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "Channels";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Audio\\Channels";
            readonly "@id": "0x9F";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@default": "1";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Numbers of channels in the track.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "AudioChannels";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "ChannelPositions";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Audio\\ChannelPositions";
            readonly "@id": "0x7D7B";
            readonly "@type": "binary";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Table of horizontal angles for each successive channel.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "AudioPosition";
            };
        }, {
            readonly "@name": "BitDepth";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Audio\\BitDepth";
            readonly "@id": "0x6264";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Bits per sample, mostly used for PCM.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "AudioBitDepth";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }];
        }, {
            readonly "@name": "Emphasis";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\Audio\\Emphasis";
            readonly "@id": "0x52F1";
            readonly "@type": "uinteger";
            readonly "@minver": "5";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Audio emphasis applied on audio samples. The player **MUST** apply the inverse emphasis to get the proper audio samples.";
            };
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "No emphasis";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "CD audio";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "First order filter with zero point at 50 microseconds and a pole at 15 microseconds. Also found on DVD Audio and MPEG audio.";
                    };
                }, {
                    readonly "@value": "2";
                    readonly "@label": "reserved";
                }, {
                    readonly "@value": "3";
                    readonly "@label": "CCIT J.17";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Defined in [@!ITU-J.17].";
                    };
                }, {
                    readonly "@value": "4";
                    readonly "@label": "FM 50";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "FM Radio in Europe. RC Filter with a time constant of 50 microseconds.";
                    };
                }, {
                    readonly "@value": "5";
                    readonly "@label": "FM 75";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "FM Radio in the USA. RC Filter with a time constant of 75 microseconds.";
                    };
                }, {
                    readonly "@value": "10";
                    readonly "@label": "Phono RIAA";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Phono filter with time constants of t1=3180, t2=318 and t3=75 microseconds. [@!NAB1964]";
                    };
                }, {
                    readonly "@value": "11";
                    readonly "@label": "Phono IEC N78";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Phono filter with time constants of t1=3180, t2=450 and t3=50 microseconds.";
                    };
                }, {
                    readonly "@value": "12";
                    readonly "@label": "Phono TELDEC";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Phono filter with time constants of t1=3180, t2=318 and t3=50 microseconds.";
                    };
                }, {
                    readonly "@value": "13";
                    readonly "@label": "Phono EMI";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Phono filter with time constants of t1=2500, t2=500 and t3=70 microseconds.";
                    };
                }, {
                    readonly "@value": "14";
                    readonly "@label": "Phono Columbia LP";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Phono filter with time constants of t1=1590, t2=318 and t3=100 microseconds.";
                    };
                }, {
                    readonly "@value": "15";
                    readonly "@label": "Phono LONDON";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Phono filter with time constants of t1=1590, t2=318 and t3=50 microseconds.";
                    };
                }, {
                    readonly "@value": "16";
                    readonly "@label": "Phono NARTB";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Phono filter with time constants of t1=3180, t2=318 and t3=100 microseconds.";
                    };
                }];
            };
            readonly extension: {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            };
        }, {
            readonly "@name": "TrackOperation";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackOperation";
            readonly "@id": "0xE2";
            readonly "@type": "master";
            readonly "@minver": "3";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Operation that needs to be applied on tracks to create this virtual track. For more details, see (#track-operation).";
            };
            readonly extension: {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            };
        }, {
            readonly "@name": "TrackCombinePlanes";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackOperation\\TrackCombinePlanes";
            readonly "@id": "0xE3";
            readonly "@type": "master";
            readonly "@minver": "3";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains the list of all video plane tracks that need to be combined to create this 3D track.";
            };
            readonly extension: {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            };
        }, {
            readonly "@name": "TrackPlane";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackOperation\\TrackCombinePlanes\\TrackPlane";
            readonly "@id": "0xE4";
            readonly "@type": "master";
            readonly "@minver": "3";
            readonly "@minOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains a video plane track that needs to be combined to create this 3D track.";
            };
            readonly extension: {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            };
        }, {
            readonly "@name": "TrackPlaneUID";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackOperation\\TrackCombinePlanes\\TrackPlane\\TrackPlaneUID";
            readonly "@id": "0xE5";
            readonly "@type": "uinteger";
            readonly "@minver": "3";
            readonly "@range": "not 0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `TrackUID` number of the track representing the plane.";
            };
            readonly extension: {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            };
        }, {
            readonly "@name": "TrackPlaneType";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackOperation\\TrackCombinePlanes\\TrackPlane\\TrackPlaneType";
            readonly "@id": "0xE6";
            readonly "@type": "uinteger";
            readonly "@minver": "3";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The kind of plane this track corresponds to.";
            };
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Track Plane Type";
                readonly "@policy": "First Come First Served";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "left eye";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "right eye";
                }, {
                    readonly "@value": "2";
                    readonly "@label": "background";
                }];
            };
        }, {
            readonly "@name": "TrackJoinBlocks";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackOperation\\TrackJoinBlocks";
            readonly "@id": "0xE9";
            readonly "@type": "master";
            readonly "@minver": "3";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains the list of all tracks whose `Blocks` need to be combined to create this virtual track.";
            };
            readonly extension: {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            };
        }, {
            readonly "@name": "TrackJoinUID";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrackOperation\\TrackJoinBlocks\\TrackJoinUID";
            readonly "@id": "0xED";
            readonly "@type": "uinteger";
            readonly "@minver": "3";
            readonly "@range": "not 0";
            readonly "@minOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `TrackUID` number of a track whose blocks are used to create this virtual track.";
            };
            readonly extension: {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            };
        }, {
            readonly "@name": "TrickTrackUID";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrickTrackUID";
            readonly "@id": "0xC0";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `TrackUID` of the Smooth FF/RW video in the paired EBML structure corresponding to this video track. See [@?DivXTrickTrack].";
            };
            readonly extension: {
                readonly "@type": "divx.com";
                readonly "@divx": "1";
            };
        }, {
            readonly "@name": "TrickTrackSegmentUID";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrickTrackSegmentUID";
            readonly "@id": "0xC1";
            readonly "@type": "binary";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@length": "16";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `SegmentUUID` of the `Segment` containing the track identified by TrickTrackUID. See [@?DivXTrickTrack].";
            };
            readonly extension: {
                readonly "@type": "divx.com";
                readonly "@divx": "1";
            };
        }, {
            readonly "@name": "TrickTrackFlag";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrickTrackFlag";
            readonly "@id": "0xC6";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@default": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if this video track is a Smooth FF/RW track. If set to 1, `MasterTrackUID` and `MasterTrackSegUID` should be present, and\n `BlockGroups` for this track must contain ReferenceFrame structures.\nOtherwise, TrickTrackUID and TrickTrackSegUID must be present if this track has a corresponding Smooth FF/RW track. See [@?DivXTrickTrack].";
            };
            readonly extension: {
                readonly "@type": "divx.com";
                readonly "@divx": "1";
            };
        }, {
            readonly "@name": "TrickMasterTrackUID";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrickMasterTrackUID";
            readonly "@id": "0xC7";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `TrackUID` of the video track in the paired EBML structure that corresponds to this Smooth FF/RW track. See [@?DivXTrickTrack].";
            };
            readonly extension: {
                readonly "@type": "divx.com";
                readonly "@divx": "1";
            };
        }, {
            readonly "@name": "TrickMasterTrackSegmentUID";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\TrickMasterTrackSegmentUID";
            readonly "@id": "0xC4";
            readonly "@type": "binary";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@length": "16";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `SegmentUUID` of the `Segment` containing the track identified by MasterTrackUID. See [@?DivXTrickTrack].";
            };
            readonly extension: {
                readonly "@type": "divx.com";
                readonly "@divx": "1";
            };
        }, {
            readonly "@name": "ContentEncodings";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings";
            readonly "@id": "0x6D80";
            readonly "@type": "master";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Settings for several content encoding mechanisms like compression or encryption.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "ContentEncoding";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding";
            readonly "@id": "0x6240";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Settings for one content encoding like compression or encryption.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "ContentEncodingOrder";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncodingOrder";
            readonly "@id": "0x5031";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Defines the order to apply each `ContentEncoding` of the `ContentEncodings`.\nThe decoder/demuxer **MUST** start with the `ContentEncoding` with the highest `ContentEncodingOrder` and work its way down to the `ContentEncoding` with the lowest `ContentEncodingOrder`.\nThis value **MUST** be unique for each `ContentEncoding` found in the `ContentEncodings` of this `TrackEntry`.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "ContentEncodingScope";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncodingScope";
            readonly "@id": "0x5032";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@default": "1";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A bit field that describes which elements have been modified in this way. Values (big-endian) can be OR'ed.";
            };
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Content Encoding Scope";
                readonly "@policy": "Specification Required";
                readonly "@bitfield": "1";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0x1";
                    readonly "@label": "Block";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "All frame contents, excluding lacing data.";
                    };
                }, {
                    readonly "@value": "0x2";
                    readonly "@label": "Private";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "The track's `CodecPrivate` data.";
                    };
                }, {
                    readonly "@value": "0x4";
                    readonly "@label": "Next";
                    readonly documentation: readonly [{
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "The next ContentEncoding (next `ContentEncodingOrder`; the data inside `ContentCompression` and/or `ContentEncryption`).";
                    }, {
                        readonly "@lang": "en";
                        readonly "@purpose": "usage notes";
                        readonly "#text": "This value **SHOULD NOT** be used, as it's not supported by players.";
                    }];
                }];
            };
        }, {
            readonly "@name": "ContentEncodingType";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncodingType";
            readonly "@id": "0x5033";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A value describing the kind of transformation that is applied.";
            };
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Content Encoding Type";
                readonly "@policy": "Specification Required";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "Compression";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "Encryption";
                }];
            };
        }, {
            readonly "@name": "ContentCompression";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentCompression";
            readonly "@id": "0x5034";
            readonly "@type": "master";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Settings describing the compression used.\nThis element **MUST** be present if the value of `ContentEncodingType` is 0 and absent otherwise.\nEach block **MUST** be decompressable, even if no previous block is available in order to not prevent seeking.";
            };
            readonly extension: {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            };
        }, {
            readonly "@name": "ContentCompAlgo";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentCompression\\ContentCompAlgo";
            readonly "@id": "0x4254";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The compression algorithm used.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "Compression method \"1\" (bzlib) and \"2\" (lzo1x) lack proper documentation on the format, which limits implementation possibilities. Due to licensing conflicts on commonly available libraries' compression methods, \"2\" (lzo1x) does not offer widespread interoperability. A `Matroska Writer` **SHOULD NOT** use these compression methods by default. A `Matroska Reader` **MAY** support methods \"1\" and \"2\" and **SHOULD** support other methods.";
            }];
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Compression Algorithm";
                readonly "@policy": "Specification Required";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "zlib";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "zlib compression [@!RFC1950].";
                    };
                }, {
                    readonly "@value": "1";
                    readonly "@label": "bzlib";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "bzip2 compression [@?BZIP2] **SHOULD NOT** be used; see usage notes.";
                    };
                }, {
                    readonly "@value": "2";
                    readonly "@label": "lzo1x";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Lempel-Ziv-Oberhumer compression [@?LZO] **SHOULD NOT** be used; see usage notes.";
                    };
                }, {
                    readonly "@value": "3";
                    readonly "@label": "Header Stripping";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Octets in `ContentCompSettings` ((#contentcompsettings-element)) have been stripped from each frame.";
                    };
                }];
            };
        }, {
            readonly "@name": "ContentCompSettings";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentCompression\\ContentCompSettings";
            readonly "@id": "0x4255";
            readonly "@type": "binary";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Settings that might be needed by the decompressor. For Header Stripping (`ContentCompAlgo`=3),\nthe bytes that were removed from the beginning of each frame of the track.";
            };
            readonly extension: {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            };
        }, {
            readonly "@name": "ContentEncryption";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption";
            readonly "@id": "0x5035";
            readonly "@type": "master";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Settings describing the encryption used.\nThis element **MUST** be present if the value of `ContentEncodingType` is 1 (encryption) and **MUST** be ignored otherwise.\nA `Matroska Player` **MAY** support encryption.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "ContentEncAlgo";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentEncAlgo";
            readonly "@id": "0x47E1";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The encryption algorithm used.";
            };
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Encryption Algorithm";
                readonly "@policy": "First Come First Served";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "Not encrypted";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "The data are not encrypted.";
                    };
                }, {
                    readonly "@value": "1";
                    readonly "@label": "DES";
                    readonly documentation: readonly [{
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Data Encryption Standard (DES) [@?FIPS46-3].";
                    }, {
                        readonly "@lang": "en";
                        readonly "@purpose": "usage notes";
                        readonly "#text": "This value **SHOULD** be avoided.";
                    }];
                }, {
                    readonly "@value": "2";
                    readonly "@label": "3DES";
                    readonly documentation: readonly [{
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Triple Data Encryption Algorithm [@?SP800-67].";
                    }, {
                        readonly "@lang": "en";
                        readonly "@purpose": "usage notes";
                        readonly "#text": "This value **SHOULD** be avoided.";
                    }];
                }, {
                    readonly "@value": "3";
                    readonly "@label": "Twofish";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Twofish Encryption Algorithm [@?Twofish].";
                    };
                }, {
                    readonly "@value": "4";
                    readonly "@label": "Blowfish";
                    readonly documentation: readonly [{
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Blowfish Encryption Algorithm [@?Blowfish].";
                    }, {
                        readonly "@lang": "en";
                        readonly "@purpose": "usage notes";
                        readonly "#text": "This value **SHOULD** be avoided.";
                    }];
                }, {
                    readonly "@value": "5";
                    readonly "@label": "AES";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Advanced Encryption Standard (AES) [@?FIPS197].";
                    };
                }];
            };
        }, {
            readonly "@name": "ContentEncKeyID";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentEncKeyID";
            readonly "@id": "0x47E2";
            readonly "@type": "binary";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "For public key algorithms, the ID of the public key that the data was encrypted with.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "ContentEncAESSettings";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentEncAESSettings";
            readonly "@id": "0x47E7";
            readonly "@type": "master";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Settings describing the encryption algorithm used.";
            };
            readonly implementation_note: {
                readonly "@note_attribute": "maxOccurs";
                readonly "#text": "ContentEncAESSettings **MUST NOT** be set (maxOccurs=0) if ContentEncAlgo is not AES (5).";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "AESSettingsCipherMode";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentEncAESSettings\\AESSettingsCipherMode";
            readonly "@id": "0x47E8";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@range": "not 0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The AES cipher mode used in the encryption.";
            };
            readonly implementation_note: {
                readonly "@note_attribute": "maxOccurs";
                readonly "#text": "AESSettingsCipherMode **MUST NOT** be set (maxOccurs=0) if ContentEncAlgo is not AES (5).";
            };
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "AES Cipher Mode";
                readonly "@policy": "First Come First Served";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "1";
                    readonly "@label": "AES-CTR";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Counter [@?SP800-38A]";
                    };
                }, {
                    readonly "@value": "2";
                    readonly "@label": "AES-CBC";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Cipher Block Chaining [@?SP800-38A]";
                    };
                }];
            };
        }, {
            readonly "@name": "ContentSignature";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentSignature";
            readonly "@id": "0x47E3";
            readonly "@type": "binary";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A cryptographic signature of the contents.";
            };
        }, {
            readonly "@name": "ContentSigKeyID";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentSigKeyID";
            readonly "@id": "0x47E4";
            readonly "@type": "binary";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "This is the ID of the private key that the data was signed with.";
            };
        }, {
            readonly "@name": "ContentSigAlgo";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentSigAlgo";
            readonly "@id": "0x47E5";
            readonly "@type": "uinteger";
            readonly "@maxver": "0";
            readonly "@default": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The algorithm used for the signature.";
            };
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "Not signed";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "RSA";
                }];
            };
        }, {
            readonly "@name": "ContentSigHashAlgo";
            readonly "@path": "\\Segment\\Tracks\\TrackEntry\\ContentEncodings\\ContentEncoding\\ContentEncryption\\ContentSigHashAlgo";
            readonly "@id": "0x47E6";
            readonly "@type": "uinteger";
            readonly "@maxver": "0";
            readonly "@default": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The hash algorithm used for the signature.";
            };
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "Not signed";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "SHA1-160";
                }, {
                    readonly "@value": "2";
                    readonly "@label": "MD5";
                }];
            };
        }, {
            readonly "@name": "Cues";
            readonly "@path": "\\Segment\\Cues";
            readonly "@id": "0x1C53BB6B";
            readonly "@type": "master";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A `Top-Level Element` to speed seeking access. All entries are\n local to the `Segment`.";
            };
            readonly implementation_note: {
                readonly "@note_attribute": "minOccurs";
                readonly "#text": "This element **SHOULD** be set when the `Segment` is not transmitted as a live stream; see (#livestreaming).";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "CuePoint";
            readonly "@path": "\\Segment\\Cues\\CuePoint";
            readonly "@id": "0xBB";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains all information relative to a seek point in the `Segment`.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "CueTime";
            readonly "@path": "\\Segment\\Cues\\CuePoint\\CueTime";
            readonly "@id": "0xB3";
            readonly "@type": "uinteger";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Absolute timestamp of the seek point, expressed in Segment Ticks, which are based on `TimestampScale`; see (#timestamp-ticks).";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "CueTrackPositions";
            readonly "@path": "\\Segment\\Cues\\CuePoint\\CueTrackPositions";
            readonly "@id": "0xB7";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains positions for different tracks corresponding to the timestamp.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "CueTrack";
            readonly "@path": "\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueTrack";
            readonly "@id": "0xF7";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The track for which a position is given.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "CueClusterPosition";
            readonly "@path": "\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueClusterPosition";
            readonly "@id": "0xF1";
            readonly "@type": "uinteger";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `Segment Position` ((#segment-position)) of the `Cluster` containing the associated `Block`.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "CueRelativePosition";
            readonly "@path": "\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueRelativePosition";
            readonly "@id": "0xF0";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The relative position inside the `Cluster` of the referenced `SimpleBlock` or `BlockGroup`\nwith 0 being the first possible position for an element inside that `Cluster`.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "CueDuration";
            readonly "@path": "\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueDuration";
            readonly "@id": "0xB2";
            readonly "@type": "uinteger";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The duration of the block, expressed in Segment Ticks, which are based on `TimestampScale`; see (#timestamp-ticks).\nIf missing, the track's `DefaultDuration` does not apply and no duration information is available in terms of the cues.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "CueBlockNumber";
            readonly "@path": "\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueBlockNumber";
            readonly "@id": "0x5378";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Number of the `Block` in the specified `Cluster`.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "CueCodecState";
            readonly "@path": "\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueCodecState";
            readonly "@id": "0xEA";
            readonly "@type": "uinteger";
            readonly "@minver": "2";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `Segment Position` ((#segment-position)) of the\n Codec State corresponding to this `Cues` element. 0 means that the\n data is taken from the initial `TrackEntry`.";
            };
        }, {
            readonly "@name": "CueReference";
            readonly "@path": "\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueReference";
            readonly "@id": "0xDB";
            readonly "@type": "master";
            readonly "@minver": "2";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `Clusters` containing the referenced `Blocks`.";
            };
        }, {
            readonly "@name": "CueRefTime";
            readonly "@path": "\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueReference\\CueRefTime";
            readonly "@id": "0x96";
            readonly "@type": "uinteger";
            readonly "@minver": "2";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Timestamp of the referenced `Block`, expressed in Segment Ticks which is based on `TimestampScale`; see (#timestamp-ticks).";
            };
        }, {
            readonly "@name": "CueRefCluster";
            readonly "@path": "\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueReference\\CueRefCluster";
            readonly "@id": "0x97";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `Segment Position` of the `Cluster` containing the referenced `Block`.";
            };
        }, {
            readonly "@name": "CueRefNumber";
            readonly "@path": "\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueReference\\CueRefNumber";
            readonly "@id": "0x535F";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@range": "not 0";
            readonly "@default": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Number of the referenced `Block` of Track X in the specified `Cluster`.";
            };
        }, {
            readonly "@name": "CueRefCodecState";
            readonly "@path": "\\Segment\\Cues\\CuePoint\\CueTrackPositions\\CueReference\\CueRefCodecState";
            readonly "@id": "0xEB";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@default": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `Segment Position` of the Codec State corresponding to this referenced element.\n0 means that the data is taken from the initial `TrackEntry`.";
            };
        }, {
            readonly "@name": "Attachments";
            readonly "@path": "\\Segment\\Attachments";
            readonly "@id": "0x1941A469";
            readonly "@type": "master";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains attached files.";
            };
        }, {
            readonly "@name": "AttachedFile";
            readonly "@path": "\\Segment\\Attachments\\AttachedFile";
            readonly "@id": "0x61A7";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "An attached file.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "Attached";
            };
        }, {
            readonly "@name": "FileDescription";
            readonly "@path": "\\Segment\\Attachments\\AttachedFile\\FileDescription";
            readonly "@id": "0x467E";
            readonly "@type": "utf-8";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A human-friendly name for the attached file.";
            };
        }, {
            readonly "@name": "FileName";
            readonly "@path": "\\Segment\\Attachments\\AttachedFile\\FileName";
            readonly "@id": "0x466E";
            readonly "@type": "utf-8";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Filename of the attached file.";
            };
        }, {
            readonly "@name": "FileMediaType";
            readonly "@path": "\\Segment\\Attachments\\AttachedFile\\FileMediaType";
            readonly "@id": "0x4660";
            readonly "@type": "string";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Media type of the file following the format described in [@!RFC6838].";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "MimeType";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "FileData";
            readonly "@path": "\\Segment\\Attachments\\AttachedFile\\FileData";
            readonly "@id": "0x465C";
            readonly "@type": "binary";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The data of the file.";
            };
            readonly extension: {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            };
        }, {
            readonly "@name": "FileUID";
            readonly "@path": "\\Segment\\Attachments\\AttachedFile\\FileUID";
            readonly "@id": "0x46AE";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "UID representing the file, as random as possible.";
            };
            readonly extension: {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            };
        }, {
            readonly "@name": "FileReferral";
            readonly "@path": "\\Segment\\Attachments\\AttachedFile\\FileReferral";
            readonly "@id": "0x4675";
            readonly "@type": "binary";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A binary value that a track/codec can refer to when the attachment is needed.";
            };
        }, {
            readonly "@name": "FileUsedStartTime";
            readonly "@path": "\\Segment\\Attachments\\AttachedFile\\FileUsedStartTime";
            readonly "@id": "0x4661";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The timestamp at which this optimized font attachment comes into context, expressed in Segment Ticks, which are based on\n `TimestampScale`. See [@?DivXWorldFonts].";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "This element is reserved for future use and if written **MUST** be the segment start timestamp.";
            }];
            readonly extension: {
                readonly "@type": "divx.com";
                readonly "@divx": "1";
            };
        }, {
            readonly "@name": "FileUsedEndTime";
            readonly "@path": "\\Segment\\Attachments\\AttachedFile\\FileUsedEndTime";
            readonly "@id": "0x4662";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The timestamp at which this optimized font attachment goes out of context, expressed in Segment Ticks, which are based on\n `TimestampScale`. See [@?DivXWorldFonts].";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "This element is reserved for future use and if written **MUST** be the segment end timestamp.";
            }];
            readonly extension: {
                readonly "@type": "divx.com";
                readonly "@divx": "1";
            };
        }, {
            readonly "@name": "Chapters";
            readonly "@path": "\\Segment\\Chapters";
            readonly "@id": "0x1043A770";
            readonly "@type": "master";
            readonly "@maxOccurs": "1";
            readonly "@recurring": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A system to define basic menus and partition data.\nFor more detailed information, see (#chapters).";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "EditionEntry";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry";
            readonly "@id": "0x45B9";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains all information about a `Segment` edition.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "EditionUID";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\EditionUID";
            readonly "@id": "0x45BC";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A UID that identifies the edition. It's useful for tagging an edition.";
            };
            readonly extension: {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            };
        }, {
            readonly "@name": "EditionFlagHidden";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\EditionFlagHidden";
            readonly "@id": "0x45BD";
            readonly "@type": "uinteger";
            readonly "@range": "0-1";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if an edition is hidden. Hidden editions **SHOULD NOT** be available to the user interface\n(but still be available to Control Tracks; see (#chapter-flags) on `Chapter` flags).";
            };
            readonly extension: {
                readonly "@type": "other document";
                readonly "@spec": "control-track";
            };
        }, {
            readonly "@name": "EditionFlagDefault";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\EditionFlagDefault";
            readonly "@id": "0x45DB";
            readonly "@type": "uinteger";
            readonly "@range": "0-1";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if the edition **SHOULD** be used as the default one.";
            };
        }, {
            readonly "@name": "EditionFlagOrdered";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\EditionFlagOrdered";
            readonly "@id": "0x45DD";
            readonly "@type": "uinteger";
            readonly "@range": "0-1";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if the chapters can be defined multiple times and the order to play them is enforced; see (#editionflagordered).";
            };
        }, {
            readonly "@name": "EditionDisplay";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\EditionDisplay";
            readonly "@id": "0x4520";
            readonly "@type": "master";
            readonly "@minver": "5";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains a possible string to use for the edition display for the given languages.";
            };
        }, {
            readonly "@name": "EditionString";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\EditionDisplay\\EditionString";
            readonly "@id": "0x4521";
            readonly "@type": "utf-8";
            readonly "@minver": "5";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains the string to use as the edition name.";
            };
        }, {
            readonly "@name": "EditionLanguageIETF";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\EditionDisplay\\EditionLanguageIETF";
            readonly "@id": "0x45E4";
            readonly "@type": "string";
            readonly "@minver": "5";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "One language corresponding to the EditionString,\nin the form defined in [@!RFC5646]; see (#language-codes) on language codes.";
            };
        }, {
            readonly "@name": "ChapterAtom";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom";
            readonly "@id": "0xB6";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly "@recursive": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains the atom information to use as the chapter atom (applies to all tracks).";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "ChapterUID";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterUID";
            readonly "@id": "0x73C4";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A UID that identifies the `Chapter`.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "stream copy";
                readonly "@keep": "1";
            }];
        }, {
            readonly "@name": "ChapterStringUID";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterStringUID";
            readonly "@id": "0x5654";
            readonly "@type": "utf-8";
            readonly "@minver": "3";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A unique string ID that identifies the `Chapter`.\nFor example, it is used as the storage for cue identifier values [@?WebVTT].";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "ChapterTimeStart";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterTimeStart";
            readonly "@id": "0x91";
            readonly "@type": "uinteger";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Timestamp of the start of `Chapter`, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks).";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "ChapterTimeEnd";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterTimeEnd";
            readonly "@id": "0x92";
            readonly "@type": "uinteger";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Timestamp of the end of `Chapter` (timestamp excluded), expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks).\nThe value **MUST** be greater than or equal to the `ChapterTimeStart` of the same `ChapterAtom`.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "With the `ChapterTimeEnd` timestamp value being excluded, it **MUST** take into account the duration of\nthe last frame it includes, especially for the `ChapterAtom` using the last frames of the `Segment`.";
            }];
            readonly implementation_note: {
                readonly "@note_attribute": "minOccurs";
                readonly "#text": "ChapterTimeEnd **MUST** be set (minOccurs=1) if the `Edition` is an ordered edition; see (#editionflagordered). If it's a `Parent Chapter`, see (#nested-chapters).";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "ChapterFlagHidden";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterFlagHidden";
            readonly "@id": "0x98";
            readonly "@type": "uinteger";
            readonly "@range": "0-1";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if a chapter is hidden.\n Hidden chapters **SHOULD NOT** be available to the user interface\n(but still be available to Control Tracks; see (#chapterflaghidden) on `Chapter` flags).";
            };
        }, {
            readonly "@name": "ChapterFlagEnabled";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterFlagEnabled";
            readonly "@id": "0x4598";
            readonly "@type": "uinteger";
            readonly "@range": "0-1";
            readonly "@default": "1";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Set to 1 if the chapter is enabled. It can be enabled/disabled by a Control Track.\nWhen disabled, the movie **SHOULD** skip all the content between the TimeStart and TimeEnd of this chapter; see (#chapter-flags) on `Chapter` flags.";
            };
            readonly extension: {
                readonly "@type": "other document";
                readonly "@spec": "control-track";
            };
        }, {
            readonly "@name": "ChapterSegmentUUID";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterSegmentUUID";
            readonly "@id": "0x6E67";
            readonly "@type": "binary";
            readonly "@length": "16";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `SegmentUUID` of another `Segment` to play during this chapter.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "The value **MUST NOT** be the `SegmentUUID` value of the `Segment` it belongs to.";
            }];
            readonly implementation_note: {
                readonly "@note_attribute": "minOccurs";
                readonly "#text": "`ChapterSegmentUUID` **MUST** be set (minOccurs=1) if `ChapterSegmentEditionUID` is used; see (#medium-linking) on Medium-Linking `Segments`.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "ChapterSegmentUID";
            };
        }, {
            readonly "@name": "ChapterSkipType";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterSkipType";
            readonly "@id": "0x4588";
            readonly "@type": "uinteger";
            readonly "@minver": "5";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Indicates what type of content the `ChapterAtom` contains and might be skipped.\n It can be used to automatically skip content based on the type.\n If a `ChapterAtom` is inside a `ChapterAtom` that has a `ChapterSkipType` set, it\n **MUST NOT** have a `ChapterSkipType` or have a `ChapterSkipType` with the same value as it's parent `ChapterAtom`.\nIf the `ChapterAtom` doesn't contain a `ChapterTimeEnd`, the value of the `ChapterSkipType` is only valid until the next `ChapterAtom` with a `ChapterSkipType` value or the end of the file.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "0";
            };
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "No Skipping";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Content which should not be skipped.";
                    };
                }, {
                    readonly "@value": "1";
                    readonly "@label": "Opening Credits";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Credits usually found at the beginning of the content.";
                    };
                }, {
                    readonly "@value": "2";
                    readonly "@label": "End Credits";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Credits usually found at the end of the content.";
                    };
                }, {
                    readonly "@value": "3";
                    readonly "@label": "Recap";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Recap of previous episodes of the content, usually found around the beginning.";
                    };
                }, {
                    readonly "@value": "4";
                    readonly "@label": "Next Preview";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Preview of the next episode of the content, usually found around the end. It may contain spoilers the user wants to avoid.";
                    };
                }, {
                    readonly "@value": "5";
                    readonly "@label": "Preview";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Preview of the current episode of the content, usually found around the beginning. It may contain spoilers the user want to avoid.";
                    };
                }, {
                    readonly "@value": "6";
                    readonly "@label": "Advertisement";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Advertisement within the content.";
                    };
                }, {
                    readonly "@value": "7";
                    readonly "@label": "Intermission";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "A pause of content between main parts of the content.";
                    };
                }];
            };
        }, {
            readonly "@name": "ChapterSegmentEditionUID";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterSegmentEditionUID";
            readonly "@id": "0x6EBC";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The `EditionUID` to play from the `Segment` linked in `ChapterSegmentUUID`.\nIf `ChapterSegmentEditionUID` is undeclared, then no `Edition` of the `Linked Segment` is used; see (#medium-linking) on Medium-Linking `Segments`.";
            };
        }, {
            readonly "@name": "ChapterPhysicalEquiv";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterPhysicalEquiv";
            readonly "@id": "0x63C3";
            readonly "@type": "uinteger";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Specifies the physical equivalent of this `ChapterAtom`, e.g., \"DVD\" (60) or \"SIDE\" (50);\nsee (#physical-types) for a complete list of values.";
            };
        }, {
            readonly "@name": "ChapterTrack";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterTrack";
            readonly "@id": "0x8F";
            readonly "@type": "master";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "List of tracks on which the chapter applies. If this element is not present, all tracks apply.";
            };
            readonly extension: {
                readonly "@type": "other document";
                readonly "@spec": "control-track";
            };
        }, {
            readonly "@name": "ChapterTrackUID";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterTrack\\ChapterTrackUID";
            readonly "@id": "0x89";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@minOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "UID of the `Track` to apply this chapter to.\nIn the absence of a control track, choosing this chapter will select the listed `Tracks` and deselect unlisted tracks.\nAbsence of this element indicates that the `Chapter` **SHOULD** be applied to any currently used `Tracks`.";
            };
            readonly extension: readonly [{
                readonly "@type": "libmatroska";
                readonly "@cppname": "ChapterTrackNumber";
            }, {
                readonly "@type": "other document";
                readonly "@spec": "control-track";
            }];
        }, {
            readonly "@name": "ChapterDisplay";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterDisplay";
            readonly "@id": "0x80";
            readonly "@type": "master";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains all possible strings to use for the chapter display.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "ChapString";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterDisplay\\ChapString";
            readonly "@id": "0x85";
            readonly "@type": "utf-8";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains the string to use as the chapter atom.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "ChapterString";
            }];
        }, {
            readonly "@name": "ChapLanguage";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterDisplay\\ChapLanguage";
            readonly "@id": "0x437C";
            readonly "@type": "string";
            readonly "@default": "eng";
            readonly "@minOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A language corresponding to the string,\nin the Matroska languages form; see (#language-codes) on language codes.\nThis element **MUST** be ignored if a `ChapLanguageBCP47` element is used within the same `ChapterDisplay` element.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "ChapterLanguage";
            }];
        }, {
            readonly "@name": "ChapLanguageBCP47";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterDisplay\\ChapLanguageBCP47";
            readonly "@id": "0x437D";
            readonly "@type": "string";
            readonly "@minver": "4";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A language corresponding to the `ChapString`,\nin the form defined in [@!RFC5646]; see (#language-codes) on language codes.\nIf a `ChapLanguageBCP47` element is used, then any `ChapLanguage` and `ChapCountry` elements used in the same `ChapterDisplay` **MUST** be ignored.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "ChapLanguageIETF";
            };
        }, {
            readonly "@name": "ChapCountry";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapterDisplay\\ChapCountry";
            readonly "@id": "0x437E";
            readonly "@type": "string";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A country corresponding to the string,\nin the Matroska countries form; see (#country-codes) on country codes.\nThis element **MUST** be ignored if a `ChapLanguageBCP47` element is used within the same `ChapterDisplay` element.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "ChapterCountry";
            }];
        }, {
            readonly "@name": "ChapProcess";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapProcess";
            readonly "@id": "0x6944";
            readonly "@type": "master";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains all the commands associated with the Atom.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "ChapterProcess";
            };
        }, {
            readonly "@name": "ChapProcessCodecID";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapProcess\\ChapProcessCodecID";
            readonly "@id": "0x6955";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains the type of the codec used for processing.";
            };
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Chapter Codec ID";
                readonly "@policy": "Specification Required";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "ChapterProcessCodecID";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "Matroska Script";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Chapter commands using the Matroska Script codec.";
                    };
                }, {
                    readonly "@value": "1";
                    readonly "@label": "DVD-menu";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Chapter commands using the DVD-like codec.";
                    };
                }];
            };
        }, {
            readonly "@name": "ChapProcessPrivate";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapProcess\\ChapProcessPrivate";
            readonly "@id": "0x450D";
            readonly "@type": "binary";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Optional data attached to the `ChapProcessCodecID` information.\n For `ChapProcessCodecID` = 1, it is the \"DVD level\" equivalent; see (#menu-features) on DVD menus.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "ChapterProcessPrivate";
            };
        }, {
            readonly "@name": "ChapProcessCommand";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapProcess\\ChapProcessCommand";
            readonly "@id": "0x6911";
            readonly "@type": "master";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains all the commands associated with the Atom.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "ChapterProcessCommand";
            };
        }, {
            readonly "@name": "ChapProcessTime";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapProcess\\ChapProcessCommand\\ChapProcessTime";
            readonly "@id": "0x6922";
            readonly "@type": "uinteger";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Defines when the process command **SHOULD** be handled.";
            };
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "0";
                    readonly "@label": "during the whole chapter";
                }, {
                    readonly "@value": "1";
                    readonly "@label": "before starting playback";
                }, {
                    readonly "@value": "2";
                    readonly "@label": "after playback of the chapter";
                }];
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "ChapterProcessTime";
            };
        }, {
            readonly "@name": "ChapProcessData";
            readonly "@path": "\\Segment\\Chapters\\EditionEntry\\+ChapterAtom\\ChapProcess\\ChapProcessCommand\\ChapProcessData";
            readonly "@id": "0x6933";
            readonly "@type": "binary";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains the command information.\nThe data **SHOULD** be interpreted depending on the `ChapProcessCodecID` value. For `ChapProcessCodecID` = 1,\nthe data correspond to the binary DVD cell pre/post commands; see (#menu-features) on DVD menus.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "ChapterProcessData";
            };
        }, {
            readonly "@name": "Tags";
            readonly "@path": "\\Segment\\Tags";
            readonly "@id": "0x1254C367";
            readonly "@type": "master";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Element containing metadata describing `Tracks`, `Editions`, `Chapters`, `Attachments`, or the `Segment` as a whole.\nA list of valid tags can be found in [@?I-D.ietf-cellar-tags].";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "Tag";
            readonly "@path": "\\Segment\\Tags\\Tag";
            readonly "@id": "0x7373";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A single metadata descriptor.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "Targets";
            readonly "@path": "\\Segment\\Tags\\Tag\\Targets";
            readonly "@id": "0x63C0";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Specifies which other elements the metadata represented by the tag value applies to.\nIf empty or omitted, then the tag value describes everything in the `Segment`.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "TagTargets";
            }];
        }, {
            readonly "@name": "TargetTypeValue";
            readonly "@path": "\\Segment\\Tags\\Tag\\Targets\\TargetTypeValue";
            readonly "@id": "0x68CA";
            readonly "@type": "uinteger";
            readonly "@range": "not 0";
            readonly "@default": "50";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A number to indicate the logical level of the target.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "The `TargetTypeValue` values are meant to be compared.\n Higher values **MUST** correspond to a logical level that contains the lower logical level `TargetTypeValue` values.";
            }];
            readonly extension: readonly [{
                readonly "@type": "enum source";
                readonly "@registry": "Tags Target Type";
                readonly "@policy": "Specification Required";
            }, {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "TagTargetTypeValue";
            }];
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "10";
                    readonly "@label": "SHOT";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "The lowest hierarchy found in music or movies.";
                    };
                }, {
                    readonly "@value": "20";
                    readonly "@label": "SUBTRACK / MOVEMENT / SCENE";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "Corresponds to parts of a track for audio, such as a movement or scene in a movie.";
                    };
                }, {
                    readonly "@value": "30";
                    readonly "@label": "TRACK / SONG / CHAPTER";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "The common parts of an album or movie.";
                    };
                }, {
                    readonly "@value": "40";
                    readonly "@label": "PART / SESSION";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "When an album or episode has different logical parts.";
                    };
                }, {
                    readonly "@value": "50";
                    readonly "@label": "ALBUM / OPERA / CONCERT / MOVIE / EPISODE";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "The most common grouping level of music and video (e.g., an episode for TV series).";
                    };
                }, {
                    readonly "@value": "60";
                    readonly "@label": "EDITION / ISSUE / VOLUME / OPUS / SEASON / SEQUEL";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "A list of lower levels grouped together.";
                    };
                }, {
                    readonly "@value": "70";
                    readonly "@label": "COLLECTION";
                    readonly documentation: {
                        readonly "@lang": "en";
                        readonly "@purpose": "definition";
                        readonly "#text": "The highest hierarchical level that tags can describe.";
                    };
                }];
            };
        }, {
            readonly "@name": "TargetType";
            readonly "@path": "\\Segment\\Tags\\Tag\\Targets\\TargetType";
            readonly "@id": "0x63CA";
            readonly "@type": "string";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "An informational string that can be used to display the logical level of the target, such as \"ALBUM\", \"TRACK\", \"MOVIE\", \"CHAPTER\", etc.";
            };
            readonly restriction: {
                readonly enum: readonly [{
                    readonly "@value": "COLLECTION";
                    readonly "@label": "TargetTypeValue 70";
                }, {
                    readonly "@value": "EDITION";
                    readonly "@label": "TargetTypeValue 60";
                }, {
                    readonly "@value": "ISSUE";
                    readonly "@label": "TargetTypeValue 60";
                }, {
                    readonly "@value": "VOLUME";
                    readonly "@label": "TargetTypeValue 60";
                }, {
                    readonly "@value": "OPUS";
                    readonly "@label": "TargetTypeValue 60";
                }, {
                    readonly "@value": "SEASON";
                    readonly "@label": "TargetTypeValue 60";
                }, {
                    readonly "@value": "SEQUEL";
                    readonly "@label": "TargetTypeValue 60";
                }, {
                    readonly "@value": "ALBUM";
                    readonly "@label": "TargetTypeValue 50";
                }, {
                    readonly "@value": "OPERA";
                    readonly "@label": "TargetTypeValue 50";
                }, {
                    readonly "@value": "CONCERT";
                    readonly "@label": "TargetTypeValue 50";
                }, {
                    readonly "@value": "MOVIE";
                    readonly "@label": "TargetTypeValue 50";
                }, {
                    readonly "@value": "EPISODE";
                    readonly "@label": "TargetTypeValue 50";
                }, {
                    readonly "@value": "PART";
                    readonly "@label": "TargetTypeValue 40";
                }, {
                    readonly "@value": "SESSION";
                    readonly "@label": "TargetTypeValue 40";
                }, {
                    readonly "@value": "TRACK";
                    readonly "@label": "TargetTypeValue 30";
                }, {
                    readonly "@value": "SONG";
                    readonly "@label": "TargetTypeValue 30";
                }, {
                    readonly "@value": "CHAPTER";
                    readonly "@label": "TargetTypeValue 30";
                }, {
                    readonly "@value": "SUBTRACK";
                    readonly "@label": "TargetTypeValue 20";
                }, {
                    readonly "@value": "MOVEMENT";
                    readonly "@label": "TargetTypeValue 20";
                }, {
                    readonly "@value": "SCENE";
                    readonly "@label": "TargetTypeValue 20";
                }, {
                    readonly "@value": "SHOT";
                    readonly "@label": "TargetTypeValue 10";
                }];
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "TagTargetType";
            }];
        }, {
            readonly "@name": "TagTrackUID";
            readonly "@path": "\\Segment\\Tags\\Tag\\Targets\\TagTrackUID";
            readonly "@id": "0x63C5";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A UID that identifies the `Track(s)` that the tags belong to.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "If the value is 0 at this level, the tags apply to all tracks in the `Segment`.\nIf set to any other value, it **MUST** match the `TrackUID` value of a track found in this `Segment`.";
            }];
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "TagEditionUID";
            readonly "@path": "\\Segment\\Tags\\Tag\\Targets\\TagEditionUID";
            readonly "@id": "0x63C9";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A UID that identifies the `EditionEntry(s)` that the tags belong to.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "If the value is 0 at this level, the tags apply to all editions in the `Segment`.\nIf set to any other value, it **MUST** match the `EditionUID` value of an edition found in this `Segment`.";
            }];
        }, {
            readonly "@name": "TagChapterUID";
            readonly "@path": "\\Segment\\Tags\\Tag\\Targets\\TagChapterUID";
            readonly "@id": "0x63C4";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A UID that identifies the `Chapter(s)` that the tags belong to.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "If the value is 0 at this level, the tags apply to all chapters in the `Segment`.\nIf set to any other value, it **MUST** match the `ChapterUID` value of a chapter found in this `Segment`.";
            }];
        }, {
            readonly "@name": "TagAttachmentUID";
            readonly "@path": "\\Segment\\Tags\\Tag\\Targets\\TagAttachmentUID";
            readonly "@id": "0x63C6";
            readonly "@type": "uinteger";
            readonly "@default": "0";
            readonly documentation: readonly [{
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A UID that identifies the Attachment(s) that the tags belong to.";
            }, {
                readonly "@lang": "en";
                readonly "@purpose": "usage notes";
                readonly "#text": "If the value is 0 at this level, the tags apply to all the attachments in\n the `Segment`. If set to any other value, it **MUST** match\n the `FileUID` value of an attachment found in this `Segment`.";
            }];
        }, {
            readonly "@name": "SimpleTag";
            readonly "@path": "\\Segment\\Tags\\Tag\\+SimpleTag";
            readonly "@id": "0x67C8";
            readonly "@type": "master";
            readonly "@minOccurs": "1";
            readonly "@recursive": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Contains general information about the target.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "TagSimple";
            }];
        }, {
            readonly "@name": "TagName";
            readonly "@path": "\\Segment\\Tags\\Tag\\+SimpleTag\\TagName";
            readonly "@id": "0x45A3";
            readonly "@type": "utf-8";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The name of the tag value that is going to be stored.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "TagLanguage";
            readonly "@path": "\\Segment\\Tags\\Tag\\+SimpleTag\\TagLanguage";
            readonly "@id": "0x447A";
            readonly "@type": "string";
            readonly "@default": "und";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "Specifies the language of the specified tag in the Matroska languages form; see (#language-codes) on language codes.\nThis element **MUST** be ignored if the `TagLanguageBCP47` element is used within the same `SimpleTag` element.";
            };
            readonly extension: readonly [{
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            }, {
                readonly "@type": "libmatroska";
                readonly "@cppname": "TagLangue";
            }];
        }, {
            readonly "@name": "TagLanguageBCP47";
            readonly "@path": "\\Segment\\Tags\\Tag\\+SimpleTag\\TagLanguageBCP47";
            readonly "@id": "0x447B";
            readonly "@type": "string";
            readonly "@minver": "4";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The language used in the `TagString`,\nin the form defined in [@!RFC5646]; see (#language-codes) on language codes.\nIf this element is used, then any `TagLanguage` elements used in the same `SimpleTag` **MUST** be ignored.";
            };
            readonly extension: {
                readonly "@type": "libmatroska";
                readonly "@cppname": "TagLanguageIETF";
            };
        }, {
            readonly "@name": "TagDefault";
            readonly "@path": "\\Segment\\Tags\\Tag\\+SimpleTag\\TagDefault";
            readonly "@id": "0x4484";
            readonly "@type": "uinteger";
            readonly "@range": "0-1";
            readonly "@default": "1";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A boolean value to indicate if this is the default/original language to use for the given tag.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "TagDefaultBogus";
            readonly "@path": "\\Segment\\Tags\\Tag\\+SimpleTag\\TagDefaultBogus";
            readonly "@id": "0x44B4";
            readonly "@type": "uinteger";
            readonly "@minver": "0";
            readonly "@maxver": "0";
            readonly "@range": "0-1";
            readonly "@default": "1";
            readonly "@minOccurs": "1";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "A variant of the `TagDefault` element with a bogus element ID; see (#tagdefault-element).";
            };
        }, {
            readonly "@name": "TagString";
            readonly "@path": "\\Segment\\Tags\\Tag\\+SimpleTag\\TagString";
            readonly "@id": "0x4487";
            readonly "@type": "utf-8";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The tag value.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }, {
            readonly "@name": "TagBinary";
            readonly "@path": "\\Segment\\Tags\\Tag\\+SimpleTag\\TagBinary";
            readonly "@id": "0x4485";
            readonly "@type": "binary";
            readonly "@maxOccurs": "1";
            readonly documentation: {
                readonly "@lang": "en";
                readonly "@purpose": "definition";
                readonly "#text": "The tag value if it is binary. Note that this cannot be used in the same `SimpleTag` as `TagString`.";
            };
            readonly extension: {
                readonly "@type": "webmproject.org";
                readonly "@webm": "1";
            };
        }];
    };
};
