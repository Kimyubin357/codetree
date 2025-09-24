const fs = require('fs');

let n = fs.readFileSync(0).toString().trim();

n = Number(n);
let result ='';
if(n >= 90){
    result += 'A';
} 
else if(n >= 80) {result += 'B';}
else if(n >= 70) {result += 'C';}
else if(n >= 60) {result += 'D';}
else {
    result += 'D';
}
console.log(result);
