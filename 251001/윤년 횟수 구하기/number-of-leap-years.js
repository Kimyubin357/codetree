const fs = require('fs');

let n = Number(fs.readFileSync(0).toString());
let cnt = 0;
while(n > 0){
    if(n % 4 === 0){
        if(n % 100 !== 0 || n % 400 === 0){
            cnt++;
        }
    }
    n--;
}
console.log(cnt);