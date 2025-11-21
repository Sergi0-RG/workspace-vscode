const prompt = require('prompt-sync')();
let salir = false;

while (!salir){
console.log('**************************************************');
console.log('Introduce 1. Para Sumar');
console.log('**************************************************');
console.log('Introduce 2. Para Restar');
console.log('**************************************************');
console.log('Introduce 3. Para Multiplicar');
console.log('**************************************************');
console.log('Introduce 4. Para Divir.');
console.log('**************************************************');
console.log('Introduce 5. Para Raíz.');
console.log('**************************************************');
console.log('Introduce q. Para Salir.');
console.log('**************************************************');

let boton = prompt('Selecciona una opción ');

if (boton === 'q'){
    salir = true;
    console.log('Saliendo del programa...')
    break;
}
let n = Number(boton);
switch (n) {
    case 1:
        console.log('1. Sumar dos digitos');
        let a1 =+prompt('Introduce el primer digito ');
        let b1 =+prompt('Introduzca el segundo digito ')
        console.log(`La suma de los dos numeros es: ${a1+b1}`);
        break;
    case 2:
        console.log('2. Restar dos digitos');
        let a2 =+prompt('Introduce el primer digito ');
        let b2 =+prompt('Introduzca el segundo digito ')
        console.log(`La resta de los dos numeros es: ${a2-b2}`);
        break;
    case 3:
        console.log('3. Multiplicar dos digitos');
        let a3 =+prompt('Introduce el primer digito ');
        let b3 =+prompt('Introduzca el segundo digito ')
        console.log(`La multiplicación de los dos numeros es: ${a3*b3}`);
        break;
    case 4:
        console.log('4. Dividir dos digitos');
        let a4 =+prompt('Introduce el primer digito ');
        let b4 =+prompt('Introduzca el segundo digito ')
        console.log(`La división de los dos numeros es: ${a4/b4}`);
        break;
    case 5:
        console.log('5. Hacer la raiz de un digito');
        let a5 =+prompt('Introduce un digito ');
        console.log(`La raiz del numero es: ${Math.sqrt(a5)}`);
        break;
    default:
        console.log('Opción no valida, intente denuevo');
    }
    console.log(" ")
}