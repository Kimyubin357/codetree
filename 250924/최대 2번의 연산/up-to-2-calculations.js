const fs = require('fs');

let a = fs.readFileSync(0).toString();

a = Number(a);

if(a % 2 === 0){
    a = parseInt(a/2);
    console.log(a);
}
if(a % 2 === 1){
    a = parseInt((a + 1) / 2);
    console.log(a);
}