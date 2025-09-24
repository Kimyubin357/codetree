const fs = require('fs');

let ch = fs.readFileSync(0).toString().trim();

let result;
if(ch == 'S'){
    result = 'Superior';
}else if(ch == 'A'){
    result = 'Excellent';
}else if(ch == 'B'){
    result = 'Good';
}else if(ch == 'C'){
    result = 'Usually';
}else if(ch == 'D'){
    result = 'Effort';
}else {
    result = 'Failure';
}

console.log(result);