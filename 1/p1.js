const fs = require('fs');
const content = fs.readFileSync('input.dat', 'utf8');

// Process the content
const result = content.replace(/[^\d\n]|\n$/g,'').split('\n').reduce((p,c) => +(c[0]+c.slice(-1))+p,0);
console.log(result);
