const fs = require('fs');

let [A, B] = fs.readFileSync(0).toString().trim().split('\n');

let [A_age, A_gen] = A.trim().split(' ');
let [B_age, B_gen] = B.trim().split(' ');

A_age = Number(A_age);
B_age = Number(B_age);

if(A_age >= 19 || B_age >= 19){
    if(A_gen == 'M' || B_gen == 'M'){
        console.log(1);
    }else{
        console.log(0);
    }
}else{
    console.log(0);
}
