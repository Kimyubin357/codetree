const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let cnt = 0;
for(let i = a; i <= b; i++){
    if(1920 % i === 0 && 2880 % i === 0) cnt = 1;
}
console.log(cnt);