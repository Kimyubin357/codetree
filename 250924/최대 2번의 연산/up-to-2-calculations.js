const fs = require('fs');

let a = fs.readFileSync(0).toString();

a = Number(a);

if(a % 2 === 0){
    console.log(parseInt(a / 2));
}else{
    console.log(parseInt((a+1)/2));
}