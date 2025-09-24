const fs = require('fs');

let n = fs.readFileSync(0).toString();

n = Number(n);

if(n >= 1){
    console.log('High');
}else if(n >= 0.5){
    console.log('Middle');
}else{
    console.log('Low');
}