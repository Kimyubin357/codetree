const fs = require('fs');

let n = readFileSync(0).toString().trim().split('\n').map(Number);
let sum = 0, cnt = 0;
let avg;
for(let i = 0; i < 10; i++){
    if(n[i] >= 0 && n[i] <= 200){
        sum += i;
        cnt++;
    }
}
avg = sum / cnt;
console.log(sum, avg.toFixed(1))