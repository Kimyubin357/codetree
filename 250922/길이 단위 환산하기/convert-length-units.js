const fs = require('fs');

let ft = fs.readFileSync(0).toString().trim();

ft = Number(ft);

let result = ft * 30.48;

console.log(result.toFixed(1));
