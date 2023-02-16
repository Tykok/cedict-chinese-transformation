# Cedict Dictionary

Getting started with the Cedcit Dictionary here. 

> This version of the documentation will be updated and improved soon ! 🙌🏽

## Getting started

To start use the Cedict dictionary library you need to install the package with `npm` or `yarn` at your root project :

```bash
npm install @tykok/cedict-dictionary

yarn add @tykok/cedict-dictionary
```

## Methods

To use methods, you simply need to import the method you want from `@tykok/cedict-dictionary`.

For example you have `getByTraditional()`, who is a method who take one string parameter. With that method you can retrieve a traditional character.

For example with :

```typescript
console.log(getByTraditional('上天入地'))
```

You will get :

```js
    { 
        traditional: "上天入地", 
        simplified: "上天入地", 
        pinyin: "shang4", 
        english: "lit. to go up to heaven or down to Hades (idiom)/fig. to go to great lengths/to search heaven and earth/" 
    }
```

You have others methods like :

- `getByEnglish()`
- `getByPinyin()`
- `getBySimplified()`

### `ChineseWord`

`ChineseWord` is a class who returned by all previous methods.

> ⚠️ Be care, all previous can return `undefined` value too.

This class have 4 string properties are :

- `traditional` : The traditional chinese character. 
- `simplified` : The simplified chinese character.
- `pinyin` : The representation of the intonation of the word in Chinese.
- `english` : Are the traduction of the current chinese word.