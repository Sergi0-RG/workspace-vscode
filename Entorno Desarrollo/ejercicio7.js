var prompt = require('prompt-sync')();
let mes = prompt('Introduce el mes de la compra: ');
let importe = +prompt('Introduce el importe total: ');
if (mes == 'Octubre') {
  total = (importe * 0.85);
} else {
  (total = importe);
}
console.log('El total es de: €' + total);

