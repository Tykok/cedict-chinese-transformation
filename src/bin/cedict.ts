#!/usr/bin/env node
import { Command } from 'commander';
import * as figlet from 'figlet';

import ChineseWord from '../types/ChineseWord';
import { colors } from '../utils/color';
import { getRandomWord } from '../utils/dictionary-function';
const pj = require('../../package.json');

const program = new Command();

const log = (message: string, value?: string): void => {
  if (!!options.no_print && options.no_print) {
    if (!!value) console.log(colors.fg.green, value, colors.reset);
  } else {
    if (!!value) console.log(message, colors.fg.green, value, colors.reset);
    if (!value) console.log(message);
  }
};

program
  .version(pj.version)
  .description('A simple CLI to query the Cedict Dictionary')
  .option(
    '-r, --random [value]',
    'Get a random word value, you should use "traditional", "simplified", "pinyin" or "english" as value.\r' +
      'If no value given, it will show all the value of the random word in same order',
  )
  .option('-np, --no_print', 'Remove all the print in the console to use only the value of the command.')
  .parse(process.argv);

const options = program.opts();

log(figlet.textSync('Cedict dictionary')); // Log for command prompt

if (!!options.random) {
  // Get a random word from cedict dictionary
  const randomChineseWord = getRandomWord();

  // If no value given for -r option, show all value of ChineseWord
  if (options.random === true) {
    log(`Traditional :`, `${randomChineseWord.traditional}`);
    log(`Simplified :`, `${randomChineseWord.simplified}`);
    log(`Pinyin :`, `${randomChineseWord.pinyin}`);
    log(`English :`, `${randomChineseWord.english}`);
  } else {
    const property = options.random as keyof ChineseWord;
    const randomWord = randomChineseWord[property];
    log(`Random ${property} from cedict dictionary :`, `${randomWord}`);
  }
} else {
  console.table(getRandomWord());
}
