# Usage
```typescript
// ArrayBufferを読み込み、EBMLの構造をJSONとして参照できます。
const arrayBuffer = await new Promise(resolve => {
    const fr = new FileReader()
    fr.onload = () => resolve(fr.result);
    fr.readAsArrayBuffer(movieBlobOrFile);
});

const ebmlJson = new EbmlToJson(arrayBuffer);
console.log(ebmlJson.toString());
// ex)
// {
//     "EBML": {
//         "EBMLVersion": 1,
//         "EBMLReadVersion": 1,
//         "EBMLMaxIDLength": 4,
//         "EBMLMaxSizeLength": 8,
//         "DocType": "webm",
//         "DocTypeVersion": 4,
//         "DocTypeReadVersion": 2
//     },
//     "Segment": {
//         "Info": [
//             {
// ...

// 各要素にアクセスすることもできます。
console.log(ebmlJson.Segment.Cluster[0].Timecode.value); // ex) 0
console.log(ebmlJson.Segment.Cluster[1].Timecode.value); // ex) 3300

// 要素の構造や値を変更し、Blobとして出力できます。
ebmlJson.Segment.Cluster[1].Timecode.value = 6600;
const editMovie = ebmlJson.toBlob();
document.getElementsByTagName("video")[0].src = URL.createObjectURL(editMovie);
```
