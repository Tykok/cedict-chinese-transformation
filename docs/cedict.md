# Cedict Dictionary

Getting started with the Cedcit Dictionary here. 

## Getting started

To start use the Cedict dictionary library you need to install the package with `npm` or `yarn` at your root project :

```bash
npm install @tykok/cedict-dictionary

yarn add @tykok/cedict-dictionary
```

## `Cedict`

To use the `Cedict` class, you simply need to import it from `@tykok/cedict-dictionary`.


```typescript
import Cedict from '@tykok/cedict-dictionary'
```

Next, you can use some function like `getByTraditional()` for example.
With that method you can retrieve a traditional character.

For example with :

```typescript
console.log(Cedict.getByTraditional('上天入地'))
```

You will get :

```javascript
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

> All this methods are static, and you can use it directly with the `Cedict` class.

### `ChineseWord`

`ChineseWord` is the type returned by all methods in [`Cedict`](#cedict) class.

> ⚠️ Be care, all this methods can return `undefined` value too.

This class have 4 string properties are :

- `traditional` : The traditional chinese character. 
- `simplified` : The simplified chinese character.
- `pinyin` : The representation of the intonation of the word in Chinese.
- `english` : Are the traduction of the current chinese word.