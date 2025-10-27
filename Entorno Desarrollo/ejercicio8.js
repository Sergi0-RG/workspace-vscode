var prompt = require('prompt-sync')();
let numero = +prompt('Introduce un número: ');
if (numero == 0) {
  console.log('El número no es par ni impar');
} else if (numero % 2 == 0) {
  console.log('par');
} else {
  console.log('impar');
}