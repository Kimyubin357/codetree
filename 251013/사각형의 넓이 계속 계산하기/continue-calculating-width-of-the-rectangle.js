const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split('\n');

let i = 0;
while(1){
    let [width, height, c] = n[i].split(' '); 
    if(c == 'C'){
        console.log(width * height);
        break;
    }
    console.log(width * height);
    i++;
}

