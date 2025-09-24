const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let max = a > b ? a : b;

let min = a < b ? a : b;

console.log(max - min);