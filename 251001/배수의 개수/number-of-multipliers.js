const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let three = 0;
let five = 0;

for(let i = 0; i < 10; i++){
    if(n[i] % 3 === 0){
        three++;
    }
    if(n[i] % 5 === 0){
        five++;
    }
}
console.log(three, five);