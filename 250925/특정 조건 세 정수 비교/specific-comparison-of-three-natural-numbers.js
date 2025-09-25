const fs = require('fs');

let [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let result;
if(a < b && a < c){
    result = 1 + ' ';
}else{
    result = 0 + ' ';
}

if(a == b && b == c && c == a){
    result += 1;
}else{
    result += 0;
}
console.log(result)