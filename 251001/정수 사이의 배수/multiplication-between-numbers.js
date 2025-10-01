const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let sum = 0;
let cnt = 0;
for(let i = a; i <= b; i++){
    if(i % 5 === 0 || i % 7 === 0){
        sum += i;
        cnt++;
    }
}

let avg = sum / cnt;

console.log(sum, avg.toFixed(1));