import { parseLine } from '../format-cedict';

describe('Check property return of dictionary function', () => {
  it('parseLine should return the right pinyin', () => {
    const line = '傍晚 傍晚 [bang4 wan3] /in the evening/when night falls/towards evening/at night fall/at dusk/';
    const actual = parseLine(line);

    expect(actual).toHaveProperty('pinyin');
    expect(actual?.pinyin).toEqual('bang4 wan3');
  });
});
