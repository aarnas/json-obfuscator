import fs from 'fs'
import {obfuscate} from './obfuscate.js'

const inputFilePath = process.argv[2]
const mappingFileName = process.argv[3] == '-' ? 'mapping' : process.argv[3] || 'mapping'
const outputFileName = process.argv[4]

fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  outputFileName
    ? fs.writeFile(`./${outputFileName}`, obfuscate(data, mappingFileName), err => {
        if (err) {
          console.error(err)
          return
        }
        console.log('Written successfully')
      })
    : console.log(obfuscate(data, mappingFileName))
})
