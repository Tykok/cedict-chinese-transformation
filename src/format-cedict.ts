import extract from 'extract-zip';
import * as fs from 'fs';
import * as superagent from 'superagent';
import ChineseWord from './types/ChineseWord';

const urlOfZip = 'https://www.mdbg.net/chinese/export/cedict/cedict_1_0_ts_utf-8_mdbg.zip';
const pathOfData = 'data';
const pathOfCedict = `${pathOfData}/cedict_ts.u8`;
const pathOfZip = `${pathOfData}/cedict_1_0_ts_utf-8_mdbg.zip`;
const pathOfJSON = `${pathOfData}/cedict.json`;

/**
 * Used to parse the cedict file given in the zip
 */
const parseLine = (line: string): ChineseWord | null => {
  if (!line || line === '' || line.startsWith('#')) return null;
  const splitedLine = line.split(/\/(.*)/s);
  if (splitedLine.length <= 0) return null;

  try {
    const english = parseEnglish(splitedLine[1]);
    const charAndPinyin = splitedLine[0].split('[');
    const characters = charAndPinyin[0].split(' ');
    const traditional = characters[0];
    const simplified = characters[1];
    let pinyin = charAndPinyin[1];
    pinyin = pinyin.split(' ')[0] as unknown as string;
    pinyin = pinyin.split(']')[0] as unknown as string;

    return { traditional, simplified, pinyin, english };
  } catch (e: unknown) {
    return null;
  }
};

const parseEnglish = (english: string): string[] => {
  english = english.replace('\r', '');
  if (english.includes('/')) {
    const splitedEnglish = english.split('/');
    const listOfEnglish: string[] = [];
    for (const word of splitedEnglish) {
      if (word.trim().length === 0) continue;
      listOfEnglish.push(word);
    }
    return listOfEnglish;
  }

  return [english];
};

const readFile = (): string[] => {
  const file = fs.readFileSync(pathOfCedict, 'utf8');
  return file.split('\n');
};

const parsedArray = (): ChineseWord[] => {
  const listOfChineseWord: ChineseWord[] = [];
  for (const line of readFile()) {
    const word = parseLine(line);
    if (word !== null) {
      listOfChineseWord.push(word);
    }
  }
  return listOfChineseWord;
};

const serializeAndSave = (object: any) => {
  const strignify = JSON.stringify(object);
  fs.writeFileSync(pathOfJSON, strignify);
};

const downloadUnzipAndFormat = async () => {
  return superagent
    .get(urlOfZip)
    .on('error', () => {
      return null;
    })
    .pipe(fs.createWriteStream(pathOfZip))
    .on('finish', async () => {
      await extract(`${process.cwd()}/${pathOfZip}`, { dir: `${process.cwd()}/${pathOfData}/` });
      serializeAndSave(parsedArray());
    });
};

const main = async () => {
  downloadUnzipAndFormat();
};

main();
