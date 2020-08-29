const mimeType = "video/webm; codecs=\"vp8, opus\"";
navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 }, audio: true })
    .then(s => {

        const recorder = new MediaRecorder(s, { mimeType });

        const chunks = [];
        recorder.addEventListener("dataavailable", e => {
            chunks.push(e.data);
        });

        recorder.addEventListener("stop", async () => {
            document.getElementById("v1").src = URL.createObjectURL(new Blob(chunks, { type: mimeType }));
            buffer = await blobsToArrayBuffer(chunks);

            const ebmlJson = new EbmlToJson(buffer);
            document.getElementById("v1Json").innerText = ebmlJson.toString();

            // durationを追加
            const infoStart = 47;
            const tracksStart = infoStart + ebmlJson.Segment.Info.slice(-1)[0].dataEnd - ebmlJson.Segment.Info[0].tagStart;
            const cuesStart = tracksStart + ebmlJson.Segment.Tracks.slice(-1)[0].dataEnd - ebmlJson.Segment.Tracks[0].tagStart;
            const seekHead = {
                name: "SeekHead",
                type: "m",
                Seek: [
                    {
                        name: "Seek",
                        type: "m",
                        SeekID: { name: "SeekID", type: "b", value: [0x15, 0x49, 0xA9, 0x66] },
                        SeekPosition: { name: "SeekPosition", type: "u", value: infoStart }
                    },
                    {
                        name: "Seek",
                        type: "m",
                        SeekID: { name: "SeekID", type: "b", value: [0x16, 0x54, 0xAE, 0x6B] },
                        SeekPosition: { name: "SeekPosition", type: "u", value: tracksStart }
                    },
                    {
                        name: "Seek",
                        type: "m",
                        SeekID: { name: "SeekID", type: "b", value: [0x1C, 0x53, 0xBB, 0x6B] },
                        SeekPosition: { name: "SeekPosition", type: "u", value: cuesStart }
                    }
                ]
            }
            ebmlJson.Segment.Info[0].Duration = { name: "Duration", type: "f", value: 10000 };
            ebmlJson.Segment = {
                SeekHead: seekHead,
                ...ebmlJson.Segment
            }
            const blob = ebmlJson.toBlob("vp8, opus");
            document.getElementById("v2").src = URL.createObjectURL(blob);
            document.getElementById("v2Json").innerText = ebmlJson.toString();
        });

        recorder.start();
        setTimeout(() => {
            recorder.stop();
        }, 10000);
    });

async function blobsToArrayBuffer(chunks) {
    const buffers = [];
    let promise = Promise.resolve();
    chunks.forEach(c => {
        promise = promise.then(() => c.arrayBuffer()).then(b => buffers.push(b));
    });
    await promise;
    const length = buffers.reduce((r, c) => r + c.byteLength, 0);
    const buf = new Uint8Array(length);
    let offset = 0;
    buffers.forEach(b => {
        buf.set(new Uint8Array(b), offset);
        offset += b.byteLength;
    });

    return buf.buffer;
}
