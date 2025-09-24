const fs = require('fs');

let [h, w] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = 10000 * w / h * h;

console.log(result)