const fs = require('fs');

let n = Number(fs.readFileSync(0).toString());
let i = 1;
let result = '';
while(i <= n){
    if(i % 3 === 0 || ( i % 10 === 3 || i % 10 === 6 || i % 10 === 9) || (parseInt(i / 10) === 3 || parseInt(i / 10) === 6 || parseInt(i/10) === 9)){
        result += 0 + ' ';
    }else{
        result += i + ' ';
    }
    i++;
}
console.log(result);