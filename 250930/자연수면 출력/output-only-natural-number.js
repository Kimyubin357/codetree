const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = '';
if(a > 0){
    for(let i = 0; i < b; i++){
        result += a;
    }
}else{
    result += 0;
}

console.log(result);