#!/usr/bin/env node
import { Command } from 'commander';
import * as figlet from 'figlet';

import ChineseWord from '../types/ChineseWord';
import { getRandomWord } from '../utils/dictionary-function';
const pj = require('../../package.json');

const program = new Command();

program
  .version(pj.version)
  .description('A simple CLI to query the Cedict Dictionary')
  .option(
    '-r, --random <value>',
    'Get a random word value, you should use "traditional", "simplified", "pinyin" or "english" as value.',
  )
  .parse(process.argv);

const options = program.opts();
console.log(figlet.textSync('Cedict dictionary')); // Log for command prompt

if (!!options.random) {
  const property = options.random as keyof ChineseWord;
  const randomWord = getRandomWord()[property];
  console.log(`Random ${property} from cedict dictionary : `, randomWord);
} else {
  console.table(getRandomWord());
}
