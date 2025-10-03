const fs = require('fs');
let n = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let i=0;
while(true){
    if(n[i]==0) break;
    console.log(n[i]);
    i++;

}