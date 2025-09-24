const fs = require('fs');

let A = Number(fs.readFileSync(0).toString());

if(A % 2 == 1){
    A += 3;
}

if(A % 3 == 0){
    A /= 3;
}