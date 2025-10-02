const fs = require('fs');

let n = Number(fs.readFileSync(0).toString());
let result = '';
for(let i = 0; i <= n; i++){
    if(i % 2 === 0 && i % 4 !== 0 || parseInt(i / 8) % 2 === 0 || i % 7 < 4 ){
        continue;
    }
    result += i + ' ';
}

console.log(result);