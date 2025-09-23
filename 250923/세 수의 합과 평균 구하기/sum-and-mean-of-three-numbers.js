const fs = require('fs');

let [a,b,c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let sum = a+b+c;
console.log(sum);
console.log(parseInt(sum / 3));