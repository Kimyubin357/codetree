let [a, b, c] = [5, 6, 7];

let temp = b;
b = a;
let temp2 = c;
c = temp;
a = temp2;

console.log(a);
console.log(b);
console.log(c);
