const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;
for(let i = 1; i <= n ; i++){
    if(n % i == 0) cnt++;
}

if(cnt == 2){
    console.log('P');
}else{
    console.log('C');
}