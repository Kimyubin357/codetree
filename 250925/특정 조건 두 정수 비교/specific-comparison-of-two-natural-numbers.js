const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result ='';
if(a < b){
    result = '1' + ' ';
}else{
    result = '0' + ' ';
}

if(a == b){
    result += '1';
}else{
    result += '0';
}

console.log(result);