const fs = require('fs');

let [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

//a가 중간이려면 b 보다 작고 c 보다 크고 또는 c보다 크고 b보다 작고

if(b > a && a > c || c > a && a > b){
    console.log(a)
}else if(a > b && b > c || c > b && b > a){
    console.log(b)
}else if(a > c && c > b || b > c && c > a){
    console.log(c)
}