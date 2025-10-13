const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;
while(n < 1000){
    if(n % 2 === 0){
        n = 3 * n + 1;
    }else{
        n = 2 * n + 2;
    }
    cnt++;
}

console.log(cnt);