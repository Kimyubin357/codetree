const fs = require('fs');

let  n = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;
let i = 1;
while(n > 1){
    cnt++;
    n = parseInt(n/i);
    i++;
    if(n <= 1){
        console.log(cnt);
        break;
    }
}

