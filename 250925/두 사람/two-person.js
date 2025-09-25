const fs = require('fs');

let [A, B] = fs.readFileSync(0).toString().trim().split('\n');

let [A_age, A_gen] = A.trim().split(' ');
let [B_age, B_gen] = B.trim().split(' ');

A_age = Number(A_age);
B_age = Number(B_age);


if(A_age >= 19 || B_age >= 19){
    if(A_age >= 19 && A_gen == 'M'){
        console.log(1);
    }else if(B_age >= 19 && B_gen == 'M'){
        console.log(1);
    }else {
        console.log(0);
    }
}else{
    console.log(0);
}

//두사람 중 한 사람이라도 19세 이상이면서

//그 19세 이상인 한 사람이 남자라면?