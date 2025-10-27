let prompt = require ('prompt-sync')();

let notaStr = prompt ('introduzca calificación');
let notaNum = Number(notaStr);
switch (notaNum) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('Suspenso');
        break;

    case 5:
    case 6:
        console.log('Bien');
        break; 
    case 7:
    case 8:
        console.log('Notable');
        break;
    case 9:
    case 10:
        console.log('Sobresaliente');
        break;

    default:
        console.log('Valor fuera de rango');
        break;
}
