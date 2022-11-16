import * as fs from "fs";
import * as superagent from "superagent"
import extract from "extract-zip";

type ChineseWord = {
  traditional: string
  simplified: string
  pinyin: string
  english: string
}

const parseLine = (line:string, debug = false): ChineseWord|null =>{
  if(line == null || line == undefined || line == '' || line.startsWith('#')) return null
  let splitedLine = line.split(/\/(.*)/s)
  if(splitedLine.length <= 0) return null

  try{
    const english = splitedLine[1]
    let char_and_pinyin = splitedLine[0].split('[')
    let characters = char_and_pinyin[0].split(' ')
    let traditional = characters[0]
    let simplified = characters[1]
    let pinyin = char_and_pinyin[1]
    pinyin = pinyin.split(' ')[0] as unknown as string
    pinyin = pinyin.split(']')[0] as unknown as string
    
    return {traditional, simplified, pinyin, english}
  }catch(e: unknown){
    console.error(e)
    console.log('Content line error : \n ${line}')
    return null
  }
}

const readFile = (): Array<string> =>{
  const file = fs.readFileSync('./lib/cedict_ts.u8', 'utf8');
  return file.split('\n')
}

const parsedArray = (): Array<ChineseWord> => {
  const listOfChineseWord: Array<ChineseWord> = []
  for(const line of readFile()){
    const word = parseLine(line)
    if(word !== null){
      listOfChineseWord.push(word)
    }
  }
  return listOfChineseWord
}

const serializeAndSave = (object: any)=>{
  const strignify = JSON.stringify(object)
  fs.writeFileSync('./lib/cedict.json', strignify)
}

const downloadUnzipAndFormat = async ()=>{
  return superagent
  .get("https://www.mdbg.net/chinese/export/cedict/cedict_1_0_ts_utf-8_mdbg.zip")
  .on('error', function(error) {
    console.log(error);
  })
  .pipe(fs.createWriteStream("./lib/cedict_1_0_ts_utf-8_mdbg.zip"))
  .on('finish', async() => {
    await extract(`${__dirname}/lib/cedict_1_0_ts_utf-8_mdbg.zip`, { dir: `${__dirname}/lib/` })
    serializeAndSave(parsedArray())
  });
}

const main = async ()=>{
  downloadUnzipAndFormat()
}

main()