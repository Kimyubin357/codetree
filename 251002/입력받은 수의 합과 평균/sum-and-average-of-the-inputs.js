const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let sum = 0;
let cnt = 0;
for(let i = 1; i <= n[0]; i++){
    sum+= n[i];
    cnt++;
}

let avg = sum / cnt;
console.log(sum, avg.toFixed(1));

