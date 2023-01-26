import ChineseWord from '../types/ChineseWord';
import {
  getByEnglish,
  getByPinyin,
  getBySimplified,
  getByTraditional,
  getRandomWord,
} from '../utils/dictionary-function';

describe('Check property return of dictionary function', () => {
  it('getByTraditional should have ChineseWord property', () => {
    const expected = getByTraditional('一');

    expect(expected).toHaveProperty('traditional');
    expect(expected).toHaveProperty('simplified');
    expect(expected).toHaveProperty('pinyin');
    expect(expected).toHaveProperty('english');
  });

  it('get should have ChineseWord property', () => {
    const expected = getBySimplified('一');

    expect(expected).toHaveProperty('traditional');
    expect(expected).toHaveProperty('simplified');
    expect(expected).toHaveProperty('pinyin');
    expect(expected).toHaveProperty('english');
  });

  it('getByEnglsih should have ChineseWord property', () => {
    const englishArray = getByEnglish('one') as ChineseWord[];
    const expected = englishArray[0];

    expect(expected).toHaveProperty('traditional');
    expect(expected).toHaveProperty('simplified');
    expect(expected).toHaveProperty('pinyin');
    expect(expected).toHaveProperty('english');
  });

  it('getByPinyin should have ChineseWord property', () => {
    const expected = getByPinyin('yi1') as ChineseWord;

    expect(expected).toHaveProperty('traditional');
    expect(expected).toHaveProperty('simplified');
    expect(expected).toHaveProperty('pinyin');
    expect(expected).toHaveProperty('english');
  });

  it('getRandomWord should get a random Chinese word', () => {
    const expected = getRandomWord();

    expect(expected).toHaveProperty('traditional');
    expect(expected).toHaveProperty('simplified');
    expect(expected).toHaveProperty('pinyin');
    expect(expected).toHaveProperty('english');
  });
});
