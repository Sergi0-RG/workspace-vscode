const prompt = require('prompt-sync')();

let numeros = [];
let pares = 0;
let impares = 0;

for (let i = 0; i < 20; i++) {
    let num = +prompt("Introduce el número "+i+": ");
    numeros.push(num);

    if (num % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Números introducidos: "+numeros);
console.log("Cantidad de números pares: " +pares);
console.log("Cantidad de números impares: " +impares);