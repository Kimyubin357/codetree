const fs = require('fs');

let a = fs.readFileSync(0).toString().trim().split('\n');
let arr = new Array(3);
for(let i =0 ; i < 3; i++){
    arr[i] = new Array(2);
}
let cnt = 0;
for(let i = 0; i < 3; i++){
    let [dia, temp] = a[i].split(' ');
    temp = Number(temp);
    if(dia == 'Y'){
        if(temp >= 37){
            cnt++;
        }
    }
}

if(cnt >= 2){
    console.log('E');
}else{
    console.log('N');
}
