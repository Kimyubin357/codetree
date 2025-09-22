const fs = require('fs');

let input = fs.readFileSync(0).toString();
input = Number(input);

console.log(`Your socre is ${input} point.`);