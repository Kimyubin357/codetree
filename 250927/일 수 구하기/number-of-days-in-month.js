const fs = require('fs');

let mon = Number(fs.readFileSync(0).toString().trim());
let rs = 0;
if(mon == 2){
    rs+=28;
}else if(mon < 8){
    if(mon % 2 == 1){//홀수 
        rs+=31
    }else{
        rs+=30
    }
}else{
    if(mon % 2 == 0){//홀수 
        rs+=31
    }else{
        rs+=30
    }

}
console.log(rs);