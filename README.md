<p align="center"><img src="./static/cedict.png" width="35%" heigth="20%"/></p>

<!-- A spacer -->
<p>&nbsp;</p>

<!-- Add your image here -->

<h2 align="center">Cedict Dictionary</h2>



<h3 align="center"></h3>

<div align="center">

![GitHub License](https://img.shields.io/github/license/tykok/cedict-chinese-transformation?style=plastic)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/tykok/cedict-chinese-transformation/main?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/tykok/cedict-chinese-transformation?style=plastic)

</div>

---

<h3 align="center">GitHub Workflow</h3>
<br/>
<div align="center">

<!-- [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) -->

![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/tykok/cedict-chinese-transformation/on-push-main.yml?label=Publish%20release&style=plastic)
![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/tykok/cedict-chinese-transformation/cron.yml?label=Get%20new%20cedict&style=plastic)
![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/tykok/cedict-chinese-transformation/run-check.yml?label=Check&style=plastic)

</div>

---

<br/>

The [Cedict Dictionary][projectLink] was created to use the Chinese dictionary easily. 

With this library, you can use the many methods to search :

1. Chinese character
2. Simplified Chinese character
3. Intonation in "Pinyin"
4. English traduction

 Or you can simply create tour own methods with the Cedict JSON file which will be updated every time a new version of the Cedict appear. 

> To know more about the Cedict, go on this [page](https://www.mdbg.net/chinese/dictionary?page=cedict).

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [`Cedict`](#cedict)
  - [Next features](#next-features)
- [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
  - [Contributing Guide](#contributing-guide)

## Getting Started

First to use the library, you should use this command into your project :

```shell
npm i @tykok/cedict-dictionary
```

### `Cedict`

How to use the `Cedict` class in your project ? Simple, you just need to import it where you want with :

```ts
import Cedict from '@tykok/cedict-dictionary'
```

Next, you can use some static functions like :

```ts
Cedict.getByPinyin('ni3')
```

To know all about this class, go on the [documentation][documentation].

### Next features

Maybe, I'll:

- Implement a CLI command for Cedict.
- Implement a Cedict database generation.

## Contributing

Development happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. 

Read below to learn how you can take part in improving this Cedict Dictionary.

### [Code of Conduct][codeOfCondutLink]

We adopted a Code of Conduct that we expect Cedict Dictionary participants to adhere to. Please read [the full text][codeOfCondutLink] so that you can understand what actions will and will not be tolerated.

### [Contributing Guide][contributingLink]

Read our [contributing guide][contributingLink] to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to our Cedict Dictionary.


[projectLink]: https://github.com/Tykok/cedict-chinese-transformation
[licenseLink]: ./LICENSE.md
[documentation]: https://tykok.github.io/cedict-chinese-transformation/
[contributingLink]: ./CONTRIBUTING.md
[codeOfCondutLink]: ./CODE_OF_CONDUCT.md
