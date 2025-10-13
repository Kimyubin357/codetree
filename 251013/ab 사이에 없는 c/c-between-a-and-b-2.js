const fs = require('fs');

let [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let result = 'NO';
for(let i = a; i <= b; i++){
    if(i % c !== 0){
        result = 'YES';
    }else{
        result = 'NO';
        break;
    }
}
console.log(result);