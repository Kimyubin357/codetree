const fs = require('fs');

let input = fs.readFileSync(0).toString().split('\n');

let a = input[0].split(' ');

console.log(a[0], a[1], input[1]);