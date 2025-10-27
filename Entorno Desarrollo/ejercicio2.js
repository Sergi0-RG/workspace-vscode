let prompt = require('prompt-sync')();

let a = +prompt('introduce un numero: ');
let b = +prompt('introduzca otro numero: ');

let suma = a+b;
let multi = a*b;
let divi = a/b;
let resta = a-b;

console.log(suma);
console.log(resta);
console.log(multi);
console.log(divi);