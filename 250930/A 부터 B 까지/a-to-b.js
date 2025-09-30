const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let result ='';


while(a <= b){
    result += a + ' ';
    if(a % 2 == 1){
        a*=2;
    }else{
        a+=3;
    }
    
}

console.log(result);