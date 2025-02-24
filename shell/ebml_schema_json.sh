# https://github.com/ietf-wg-cellar/matroska-specification/blob/master/ebml_matroska.xml
# スキーマは上記から取得

# pip install yq

wget https://raw.githubusercontent.com/ietf-wg-cellar/ebml-specification/1b979df551709813c5f9e7163b886a09436fbfff/ebml.xml -O /tmp/ebml.xml
wget https://raw.githubusercontent.com/ietf-wg-cellar/matroska-specification/refs/heads/master/ebml_matroska.xml -O /tmp/ebml_matroska.xml
echo -n "export const EbmlSchemaJson = " > ./src/EbmlSchemaJson.ts
echo -n `xq '(.EBMLSchema.element) += input.EBMLSchema.element' /tmp/ebml.xml /tmp/ebml_matroska.xml` >> ./src/EbmlSchemaJson.ts
echo -n " as const;" >> ./src/EbmlSchemaJson.ts