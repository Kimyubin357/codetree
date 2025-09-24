const fs = require('fs');

let n = fs.readFileSync(0).toString().trim();

n = Number(n);

let result = '';
if(n >= 100){
    result += 'vapor';
}else if(n < 0){
    result += 'ice';
}else{
    result += 'water';
}

console.log(result);