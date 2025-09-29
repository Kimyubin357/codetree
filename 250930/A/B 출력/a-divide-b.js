const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let mok = parseInt(a / b); // 몫을 구하고
let result ='';
result += mok + '.';
let namugi = a % b; // 나머지를 구하고
let cnt = 0;
while(cnt < 20){
    namugi *= 10;
    mok = parseInt(namugi / b);
    namugi %= b;
    result += mok; 
    cnt++;
}
console.log(result);
