import { ChineseWord } from '../types/ChineseWord';
export declare const getCedict: () => ChineseWord[];
export declare const getByTraditional: (character: string) => ChineseWord | undefined;
export declare const getBySimplified: (character: string) => ChineseWord | undefined;
export declare const getByPinyin: (character: string) => ChineseWord | undefined;
export declare const getByEnglish: (sentence: string) => ChineseWord[] | undefined;
export declare const allOccurenceOfTraditional: (traditional: string) => ChineseWord[] | undefined;
