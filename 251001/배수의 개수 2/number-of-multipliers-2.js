const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let cnt = 0;
for(let i = 0; i < 10; i++){
    if(n[i] % 2 === 1){
        cnt++;
    }
}

console.log(cnt);