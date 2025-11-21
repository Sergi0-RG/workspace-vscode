const prompt = require('prompt-sync')();

let min = +prompt('Introduzca a:')
let max = +prompt('Introduzca b:')
let suma = 0;
while (min<=max){

suma = (suma + min);
min++;
}
console.log('La suma es '+suma);