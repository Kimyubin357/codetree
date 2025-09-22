const fs = require('fs');

let input = fs.readFileSync(0).toString().split('\n').map(v=>Number(v));

console.log(input[0].toFixed(3));
console.log(input[1].toFixed(3));
console.log(input[2].toFixed(3));
