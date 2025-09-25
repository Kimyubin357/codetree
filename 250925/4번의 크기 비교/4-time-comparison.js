const fs = require('fs');

let [a, num] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let [b,c,d,e] = num.split(' ');

console.log(a > b ? 1 : 0);

console.log(a > c ? 1 : 0);

console.log(a > d ? 1 : 0);

console.log(a > e ? 1 : 0);