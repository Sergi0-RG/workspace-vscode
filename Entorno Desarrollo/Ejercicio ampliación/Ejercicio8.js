const prompt = require('prompt-sync')();
let salir = false;

while (!salir){
console.log('**************************************************');
console.log('Introduce 1. Para calcular el area de un triangulo');
console.log('**************************************************');
console.log('Introduce 2. Para calcular el area de un cuadrado');
console.log('**************************************************');
console.log('Introduce 3. Para calcular el area de un circulo');
console.log('**************************************************');
console.log('Introduce 4. Para salir.');
console.log('**************************************************');

let n = +prompt('Selecciona una opción ');

switch (n) {
    case 1:
        console.log('1. Calcular el area de un triangulo');
        let base =+prompt('Introduzca la base ');
        let altura =+prompt('Introduzca la altura ');
        console.log(`El area del triangulo es: ${(base*altura)/2}`);
        break;
    case 2:
        console.log('2. Calcular el area de un cuadrado');
        let lado =+prompt('Introduzca el lado del cuadrado ');
        console.log(`El area del cuadrado es: ${lado*lado}`);
        break;
    case 3:
        console.log('3. Calcular el area de un circulo');
        let radio =+prompt('Introduzca el radio ');
        console.log(`El area del circulo es: ${3.14*radio*radio}`);
        break;
    case 4:
        console.log('Saliendo del programa...');
        salir = true;
        break;
    default:
        console.log('Opción no valida, intente denuevo');
    }
    console.log(' ')
}