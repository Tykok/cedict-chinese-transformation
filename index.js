"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const superagent = __importStar(require("superagent"));
const extract_zip_1 = __importDefault(require("extract-zip"));
const parseLine = (line, debug = false) => {
    if (line == null || line == undefined || line == '' || line.startsWith('#'))
        return null;
    let splitedLine = line.split(/\/(.*)/s);
    if (splitedLine.length <= 0)
        return null;
    try {
        const english = splitedLine[1];
        let char_and_pinyin = splitedLine[0].split('[');
        let characters = char_and_pinyin[0].split(' ');
        let traditional = characters[0];
        let simplified = characters[1];
        let pinyin = char_and_pinyin[1];
        pinyin = pinyin.split(' ')[0];
        pinyin = pinyin.split(']')[0];
        return { traditional, simplified, pinyin, english };
    }
    catch (e) {
        console.error(e);
        console.log('Content line error : \n ${line}');
        return null;
    }
};
const readFile = () => {
    const file = fs.readFileSync('./lib/cedict_ts.u8', 'utf8');
    return file.split('\n');
};
const parsedArray = () => {
    const listOfChineseWord = [];
    for (const line of readFile()) {
        const word = parseLine(line);
        if (word !== null) {
            listOfChineseWord.push(word);
        }
    }
    return listOfChineseWord;
};
const serializeAndSave = (object) => {
    const strignify = JSON.stringify(object);
    fs.writeFileSync('./lib/cedict.json', strignify);
};
const downloadUnzipAndFormat = () => __awaiter(void 0, void 0, void 0, function* () {
    return superagent
        .get("https://www.mdbg.net/chinese/export/cedict/cedict_1_0_ts_utf-8_mdbg.zip")
        .on('error', function (error) {
        console.log(error);
    })
        .pipe(fs.createWriteStream("./lib/cedict_1_0_ts_utf-8_mdbg.zip"))
        .on('finish', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, extract_zip_1.default)(`${__dirname}/lib/cedict_1_0_ts_utf-8_mdbg.zip`, { dir: `${__dirname}/lib/` });
        serializeAndSave(parsedArray());
    }));
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    downloadUnzipAndFormat();
});
main();
