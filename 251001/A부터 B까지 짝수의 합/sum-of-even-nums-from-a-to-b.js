const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let i, end, sum = 0;
if(a > b){
    i = b;
    end = a;
}else{
    i = a;
    end = b;
}

for(i; i <= end; i++){
    if(i % 2 === 0){
        sum += i;
    }
}
console.log(sum);