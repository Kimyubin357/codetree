const fs = require('fs');

let N = Number(fs.readFileSync(0).toStirng());
let result = '';
whlie(N <= 100){
    if(N >= 90){
        result += 'A' + ' ';
    }else if(N >= 80){
        result += 'B' + ' ';
    }else if(N >= 70){
        result += 'C' + ' ';
    }else if(N >= 60){
        result += 'D' + ' ';
    }else{
        result += 'F' + ' ';
    }
}
console.log(result);