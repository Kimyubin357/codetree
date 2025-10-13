const fs = require('fs');

let [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let satified = 'NO';
for(let i = a; i <= b; i++){
    if(i % c === 0) satified = 'YES';
}

console.log(satified);