const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().map(Number);

console.log(n * n);

if(n < 4){
    console.log('tiny');
}