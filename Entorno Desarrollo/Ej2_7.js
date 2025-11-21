var prompt = require('prompt-sync')();
let max = 0
let min = 0
let count = 0;
let acc= 0;
do {
let n = prompt('Introduce un numero: ');
if (n>max){
    max = n;
}
if (n<min){
    min = n;
}
acc +=n;
count++;
}while (n != 0);    

console.log('el minimo es '+min+' el max es '+max+'y la media es '+(acc/count));