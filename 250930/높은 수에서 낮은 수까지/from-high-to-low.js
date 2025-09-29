const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = '';
if(b > a){
    for(let i = b; i >= a; i--){
        result += i + ' ' ;
    }
}else{
    for(let i = a; i >= b; i--){
        result += i + ' ' ;
    }
}


console.log(result);