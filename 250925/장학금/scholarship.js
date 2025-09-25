const fs = require('fs');

let [mid, fin] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = 0;
if(mid >= 90){
    if(fin >= 95){
        result = 100000;
    }else if(fin >= 90){
        result = 50000;
    }else{
        result = 0;
    }
}

console.log(result);