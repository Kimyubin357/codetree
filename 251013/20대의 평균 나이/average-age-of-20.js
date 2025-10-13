const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let i = 0;
let avg = 0;
let cnt = 0;
while(n[i] < 30){
    avg += n[i];
    cnt++;
    i++;
}
console.log((avg / cnt).toFixed(2));