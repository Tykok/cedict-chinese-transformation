import cedict from '../../data/cedict.json';
import ChineseWord from '../types/ChineseWord';

class Cedict {
  static getCedict(): ChineseWord[] {
    return cedict;
  }

  static getByTraditional(character: string): ChineseWord[] | undefined {
    return Cedict.getCedict().filter((word) => {
      return word.traditional.toUpperCase() === character.toUpperCase();
    });
  }

  static getBySimplified(character: string): ChineseWord[] | undefined {
    return Cedict.getCedict().filter((word) => {
      return word.simplified.toUpperCase() === character.toUpperCase();
    });
  }

  static getByPinyin(character: string): ChineseWord[] | undefined {
    return Cedict.getCedict().filter((word) => {
      return word.pinyin.toUpperCase() === character.toUpperCase();
    });
  }

  static getByEnglish(sentence: string): ChineseWord[] | undefined {
    return Cedict.getCedict().filter((word) => {
      for (const english of word.english) if (english.toUpperCase().includes(sentence.toUpperCase())) return true;

      return false;
    });
  }
}

export default Cedict;
