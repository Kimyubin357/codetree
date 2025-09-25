const fs = require('fs');

let A = Number(fs.readFileSync(0).toString().trim());

if(A % 3 == 0){
    console.log('YES');
}else{
    console.log('NO');
}

if(A % 5 == 0){
    console.log('YES');
}else{
    console.log('NO');
}
