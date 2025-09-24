const fs = require('fs');

let n = fs.readFileSync(0).toString().trim();

n = Number(n);

if(n >= 113){
    console.log(1);
}else{
    console.log(0);
}