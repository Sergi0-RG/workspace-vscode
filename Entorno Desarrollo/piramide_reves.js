var prompt = require('prompt-sync')();
const altura = +prompt('Introduce altura del triangulo: ');
const anchura = +prompt('Introduce la anchura: ')
let contador = 0;
while ( contador< altura*altura){

    process.stdout.write(' '.repeat(contador));
    process.stdout.write('*'.repeat(2*contador+4));
    


process.stdout.write('\n');
contador++
}