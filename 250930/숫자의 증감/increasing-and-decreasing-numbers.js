const fs = require('fs');

let [c, n] = fs.readFileSync(0).toString().trim().split(' ');

n = Number(n);
let result = '';
if(c == 'A'){
    for(let i = 1; i <= n; i++){
        result += i + ' ';
    }
}else{
    for(let i = n; i > 0; i--){
        result += i + ' ';
    }
}
console.log(result);