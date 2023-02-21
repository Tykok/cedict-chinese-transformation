import cedict from '../../data/cedict.json';
import ChineseWord from '../types/ChineseWord';

class Cedict {
  static getCedict(): ChineseWord[] {
    return cedict;
  }

  static getByTraditional(character: string): ChineseWord | undefined {
    return Cedict.getCedict().find((word) => word.traditional === character);
  }

  static getBySimplified(character: string): ChineseWord | undefined {
    return Cedict.getCedict().find((word) => word.simplified === character);
  }

  static getByPinyin(character: string): ChineseWord | undefined {
    return Cedict.getCedict().find((word) => word.pinyin === character);
  }

  static getByEnglish(sentence: string): ChineseWord[] | undefined {
    return Cedict.getCedict().filter((word) => word.english.includes(sentence));
  }

  static allOccurenceOfTraditional(traditional: string): ChineseWord[] | undefined {
    return Cedict.getCedict().filter((word) => word.traditional.includes(traditional));
  }
}

export default Cedict;
