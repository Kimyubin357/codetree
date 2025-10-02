const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let c = 1;
for(let i = 1; i <= b; i++){
    if(i % a === 0){
        c *= i;
    }
}
console.log(c);