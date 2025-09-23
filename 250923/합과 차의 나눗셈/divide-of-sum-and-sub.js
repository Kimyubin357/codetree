const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = a + b;
let sub = a - b;

console.log((sum / sub).toFixed(2));