const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());
let result = 'N';
for(let i = 2; i < n; i++){
    if(n % i === 0) result = 'C'; 
}
console.log(result);