const fs = require('fs');

let n = Number(fs.readFileSync(0).toString());

let eleven = 0;
let twice = 0;
let third = 0;

let i = 0;

while(i < n){
    i++;
    if(i % 12 == 0){
        eleven++;
    }else if (i % 3 == 0){
        third++;
    }else if (i % 2 == 0){
        twice++;
    }
}
console.log(twice, third, eleven);