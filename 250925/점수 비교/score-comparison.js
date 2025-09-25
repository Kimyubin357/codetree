const fs = require('fs');

let [A, B] = fs.readFileSync(0).toString().trim().split('\n');

let [math_A, eng_A] = A.split(' ').map(Number);
let [math_B, eng_B] = B.split(' ').map(Number);


if(math_A > math_B && eng_A > eng_B){
    console.log(1);
}else{
    console.log(0);
}

