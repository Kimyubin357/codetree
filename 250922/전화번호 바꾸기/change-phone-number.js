const fs = require('fs');

let [a, x, y] = fs.readFileSync(0).toString().trim().split('-');

console.log(a+'-'+y+'-'+x);