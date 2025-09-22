const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split('\n');

console.log(input[1]);
console.log(input[0]);