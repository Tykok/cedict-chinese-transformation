"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cedict_json_1 = __importDefault(require("../data/cedict.json"));
const dictionary_function_1 = require("./utils/dictionary-function");
console.log((0, dictionary_function_1.getByEnglish)('simple'));
exports = {
    getByTraditional: dictionary_function_1.getByTraditional,
    getByEnglish: dictionary_function_1.getByEnglish,
    getByPinyin: dictionary_function_1.getByPinyin,
    getBySimplified: dictionary_function_1.getBySimplified,
    cedict: cedict_json_1.default
};
