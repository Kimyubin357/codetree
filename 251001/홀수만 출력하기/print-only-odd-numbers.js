const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split('\n').map(Number);

for(let i = 1; i <= n[0]; i++){
    if(n[i] % 2 === 1 && n[i] % 3 === 0){
        console.log(n[i]);
    }
}