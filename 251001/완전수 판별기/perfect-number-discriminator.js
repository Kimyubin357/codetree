const fs = require('fs');

let n = Number(fs.readFileSync(0).toString());
let i = 1;
let sum = 0;
while(i <= n){
    if(n % i === 0){
        sum += i;
    }
    i++;
}
console.log(sum)
if(n == sum){
    console.log('P');
}else{
    console.log('N');
}