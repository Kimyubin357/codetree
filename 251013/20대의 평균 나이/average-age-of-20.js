const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let i = 0;
let sum = 0;
let cnt = 0;
while(n[i] < 30 && n[i] > 19){
    sum += n[i];
    cnt++;
    i++;
}
let avg = sum / cnt ;
console.log(avg.toFixed(2));