import fs from 'fs'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import {obfuscate} from './obfuscate.js'

const argv = yargs(hideBin(process.argv)).argv

const inputFilePath = argv.inputPath
const mappingFileName = argv.mapperName || 'mapping'
const outputPath = argv.outputPath

fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  outputPath
    ? fs.writeFile(`./${outputPath}`, obfuscate(data, mappingFileName), err => {
        if (err) {
          console.error(err)
          return
        }
        console.log('Written successfully')
      })
    : console.log(obfuscate(data, mappingFileName))
})
