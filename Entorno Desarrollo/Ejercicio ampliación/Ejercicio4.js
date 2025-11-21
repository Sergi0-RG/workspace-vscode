const prompt = require('prompt-sync')();


function leervotosconvalidacion (candidato ) {
    let num ;
    do {
        num = Number(prompt(`introduzca votos del candidato${ candidato}: `));
        if (Number.isNaN(num)) {
        console.log('formato de número de votos incorrecto');
            }
        }    while (Number.isNaN(num));
            return num;

}
let Suma = 0;
let alcalde ='';
let votos1, votos2, votos3;
let contador = 1;
let max = -Infinity;
while (contador<=3) {

    let votos = leervotosconvalidacion('candidato' + contador);
    Suma += votos;

    if (votos > max) {
        alcalde = 'candidato' + contador;
        max = votos;
    }

switch (contador) {
    case 1:
        votos1 = votos;
        break;
    case 2:
        votos2 = votos;
        break;
    case 3:
        votos3 = votos;
        break;
    }

    contador++;
}

console.log(`
Votos totales: ${Suma}.
Votos candidato 1:
${votos1} porcentaje: ${votos1*100/Suma}

Votos candidato 2:
${votos2} porcentaje: ${votos2*100/Suma}

Votos candidato 3:
${votos3} porcentaje: ${votos3*100/Suma}

`);