const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let i = 0;
while(n[i] != undefined){
    if(n[i] % 2 == 0){
        n[i] = parseInt(n[i] / 2);
        console.log(n[i]);
    }
    i++;
}
