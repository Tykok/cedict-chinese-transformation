import cedict from '../../data/cedict.json'
import { ChineseWord } from '../types/ChineseWord'

export const getCedict = (): Array<ChineseWord> => {
  return cedict
}

export const getByTraditional = (character: string): ChineseWord | undefined => {
  return getCedict().find(word => word.traditional === character)
}

export const getBySimplified = (character: string): ChineseWord | undefined => {
  return getCedict().find(word => word.simplified === character)
}

export const getByPinyin = (character: string): ChineseWord | undefined => {
  return getCedict().find(word => word.pinyin === character)
}

export const getByEnglish = (sentence: string): Array<ChineseWord> | undefined => {
  return getCedict().filter(word => word.english.includes(sentence))
}

export const allOccurenceOfTraditional = (traditional: string): Array<ChineseWord> | undefined => {
  return getCedict().filter(word => word.traditional.includes(traditional))
}
