const fs = require('fs');

let [a, b, c]= fs.readFileSync(0).toString().trim().split(' ').map(Number);

if(a <= b && a <= c){
    console.log(a);
}
