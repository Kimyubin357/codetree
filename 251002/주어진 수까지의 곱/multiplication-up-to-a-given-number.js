const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let j = 1;

for(let i = a; i <= b; i++){
    j *= i;
}

console.log(j);