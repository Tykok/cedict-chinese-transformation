var fs = require('fs');

var obj = JSON.parse(fs.readFileSync('cedict.json', 'utf8'));
console.log(obj['九寨沟风景名胜区'])