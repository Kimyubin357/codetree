const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());
let result = '';
for(let i = 0; i < 5; i++){
    result += (i * n) + ' ';
}
console.log(result);