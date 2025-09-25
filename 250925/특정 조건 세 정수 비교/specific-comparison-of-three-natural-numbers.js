const fs = require('fs');

let [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if(a < b && a < c){
    console.log(1);
}else{
    console.log(0);
}

if(a == b && b == c && c == a){
    console.log(1);
}else{
    console.log(0);
}