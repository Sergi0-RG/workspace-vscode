var prompt = require('prompt-sync')();
let niños = +prompt('Introduce el número de niños: ');
let niñas = +prompt('Introduce el número de niñas: ');
let suma = niños + niñas;
let porcentaje_niños = (niños / suma) * 100;
let porcentaje_niñas = (niñas / suma) * 100;
console.log('Porcentaje de niños: ' +porcentaje_niños+ '%');
console.log('Porcentaje de niñas: ' +porcentaje_niñas+ '%');