const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());
let x = 1;
while(1){
    if(n === 2 ** x) break;
    x++;
}
console.log(x);