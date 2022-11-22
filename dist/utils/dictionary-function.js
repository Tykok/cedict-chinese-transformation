"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allOccurenceOfTraditional = exports.getByEnglish = exports.getByPinyin = exports.getBySimplified = exports.getByTraditional = exports.getCedict = void 0;
const cedict_json_1 = __importDefault(require("../../data/cedict.json"));
const getCedict = () => {
    return cedict_json_1.default;
};
exports.getCedict = getCedict;
const getByTraditional = (character) => {
    return (0, exports.getCedict)().find(word => word.traditional === character);
};
exports.getByTraditional = getByTraditional;
const getBySimplified = (character) => {
    return (0, exports.getCedict)().find(word => word.simplified === character);
};
exports.getBySimplified = getBySimplified;
const getByPinyin = (character) => {
    return (0, exports.getCedict)().find(word => word.pinyin === character);
};
exports.getByPinyin = getByPinyin;
const getByEnglish = (sentence) => {
    return (0, exports.getCedict)().filter(word => word.english.includes(sentence));
};
exports.getByEnglish = getByEnglish;
const allOccurenceOfTraditional = (traditional) => {
    return (0, exports.getCedict)().filter(word => word.traditional.includes(traditional));
};
exports.allOccurenceOfTraditional = allOccurenceOfTraditional;
