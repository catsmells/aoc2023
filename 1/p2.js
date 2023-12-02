const fs = require('fs');
const content = fs.readFileSync('input.dat', 'utf-8');
const g = '\\d|one|two|three|four|five|six|seven|eight|nine';
const result = content.trim().split('\n').reduce((p, c) => +c.match(`(?=(${g})).*(${g})`).map(j => +j || g.split`|`.indexOf(j)).slice(1).join`` + p, 0);
console.log(result);
