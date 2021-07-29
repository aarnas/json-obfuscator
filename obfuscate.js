import fs from 'fs'

export function obfuscate(inputJSON, mappingFileName) {
  var jsonValues = String(inputJSON).match(/"[^"]*"|'[^']*'/g)
  let mapping = []
  if (Array.isArray(jsonValues)) {
    for (
      var obfuscatedJson = String(inputJSON), result = '', d = 0;
      d < jsonValues.length;

    ) {
      obfuscatedJson = obfuscatedJson.replace(
        jsonValues[d].replace('"', '').replace('"', ''),
        '' + unicodeEscape(jsonValues[d].replace('"', '').replace('"', '')),
      )
      let obfuscatedJsonValues = String(obfuscatedJson).match(/"[^"]*"|'[^']*'/g)
      mapping.push(`${jsonValues[d]} -> ${obfuscatedJsonValues[d]}`)
      d++
    }
    mapping = mapping.filter((c, index) => {
      return mapping.indexOf(c) === index
    })

    fs.writeFile(
      `./output/${mappingFileName}.txt`,
      mapping.join('\n').toString(),
      err => {
        if (err) {
          console.error(err)
          return
        }
      },
    )
    result = obfuscatedJson
    return result
  }
}
function unicodeEscape(a) {
  for (var b = '', c = 0, d; !isNaN((d = a.charCodeAt(c++))); )
    b += '\\u' + ('0000' + d.toString(16)).slice(-4)
  return b
}
