import cedict from '../data/cedict.json'
import { getByEnglish, getByPinyin, getBySimplified, getByTraditional } from './utils/dictionary-function'

exports = {
  getByTraditional,
  getByEnglish,
  getByPinyin,
  getBySimplified,
  cedict
}
