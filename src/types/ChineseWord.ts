/**
 * Basic structure for a Chinese word.
 */
export type ChineseWord = {
  /**
  * Chinese traditional character
  */
  traditional: string

  /**
   * Chinese simplified character
   */
  simplified: string

  /**
   * Pinyin is the official transcription of Mandarin Chinese
   */
  pinyin: string

  /**
   * English translation of the chinese word
   */
  english: string
}