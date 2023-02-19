import ChineseWord from '../types/ChineseWord'
import Cedict from '../classes/Cedict'

describe('Check property return of dictionary function', () => {
  it('getByTraditional should have ChineseWord property', () => {
    const expected = Cedict.getByTraditional('一')

    expect(expected).toHaveProperty('traditional')
    expect(expected).toHaveProperty('simplified')
    expect(expected).toHaveProperty('pinyin')
    expect(expected).toHaveProperty('english')
  })

  it('get should have ChineseWord property', () => {
    const expected = Cedict.getBySimplified('一')

    expect(expected).toHaveProperty('traditional')
    expect(expected).toHaveProperty('simplified')
    expect(expected).toHaveProperty('pinyin')
    expect(expected).toHaveProperty('english')
  })

  it('getByEnglsih should have ChineseWord property', () => {
    const englishArray = Cedict.getByEnglish('one') as ChineseWord[]
    const expected = englishArray[0]

    expect(expected).toHaveProperty('traditional')
    expect(expected).toHaveProperty('simplified')
    expect(expected).toHaveProperty('pinyin')
    expect(expected).toHaveProperty('english')
  })

  it('getByPinyin should have ChineseWord property', () => {
    const expected = Cedict.getByPinyin('yi1') as ChineseWord

    expect(expected).toHaveProperty('traditional')
    expect(expected).toHaveProperty('simplified')
    expect(expected).toHaveProperty('pinyin')
    expect(expected).toHaveProperty('english')
  })
})
