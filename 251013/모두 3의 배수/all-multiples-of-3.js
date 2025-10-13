const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let cnt = 0;
for(let i = 0; i < n.length; i++){
    if(n[i] % 3 == 0) cnt++;
}

if(cnt == 5){
    console.log(1);
}else{
    console.log(0);
}