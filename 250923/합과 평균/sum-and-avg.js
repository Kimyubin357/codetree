const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(a+b, parseInt((a+b)/2));