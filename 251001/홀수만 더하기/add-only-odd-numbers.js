const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let sum = 0;
for(let i = 1; i <= n; i++){
    if(n[i] % 2 === 1 && n[i] % 3 === 0){
        sum += n[i];
    }
}

console.log(sum);