import ChineseWord from '../types/ChineseWord'
import Cedict from '../classes/Cedict';

const checkProperty = (word: ChineseWord) => {
  expect(word).toHaveProperty('traditional');
  expect(word).toHaveProperty('simplified');
  expect(word).toHaveProperty('pinyin');
  expect(word).toHaveProperty('english');
}

const expectOneContains = (word: string[], character: string) => {
  const count = word.reduce((acc, curr) => {
    if (curr.toUpperCase().includes(character.toUpperCase())) return acc + 1
    return acc
  }
  , 0)
  expect(count).toBeGreaterThanOrEqual(1)
}

describe('Check property return of dictionary function', () => {
  it('getByTraditional should have ChineseWord property', () => {
    const traditional = '一'
    const expected = Cedict.getByTraditional(traditional)

    expected?.forEach(e => {
      checkProperty(e)
      expect(e.traditional.toUpperCase()).toContain(traditional.toUpperCase())
    })
  })

  it('get should have ChineseWord property', () => {
    const simplified = '一'
    const expected = Cedict.getBySimplified(simplified)

    expected?.forEach(e => {
      checkProperty(e)
      expect(e.simplified.toUpperCase()).toContain(simplified.toUpperCase())
    })
  })

  it('getByEnglsih should have ChineseWord property', () => {
    const english = 'one'
    const expected = Cedict.getByEnglish(english)

    expected?.forEach(e => {
      checkProperty(e)
      e.english.forEach(english => {
        expectOneContains(e.english, english)
      })
    })
  })

  it('getByPinyin should have ChineseWord property', () => {
    const pinyin = 'yi1'
    const expected = Cedict.getByPinyin(pinyin)

    expected?.forEach(e => {
      checkProperty(e)
      expect(e.pinyin.toUpperCase()).toContain(pinyin.toUpperCase())
    })
  })
})
