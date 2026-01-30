const prompt = require('prompt-sync')();
let salir = false;
let total=0;
function leerCantidadPositiva(){
 let cantidad = 0;
    while (cantidad<=0){
         cantidad = +prompt('Cantidad de dinero')
        if (cantidad <=0){
            console.log('Debes ingresar un numero positivo')
        }
    }
    return cantidad;
}
function OpcionMenu(){
console.log('**************************************************');
console.log('Introduce 1. Para Consultar saldo');
console.log('**************************************************');
console.log('Introduce 2. Para Ingresar dinero');
console.log('**************************************************');
console.log('Introduce 3. Para Retirar dinero');
console.log('**************************************************');
console.log('Introduce 4. Para Salir.');
console.log('**************************************************');
let n = +prompt('Selecciona una opción ');
return n;
}
//Main
while (!salir){ 
    let n = OpcionMenu();
 switch (n) {
    case 1:
        console.log('1. Consultar saldo');
        console.log('**************************************************');
        console.log('Tu saldo actual es: ' + total + ' €');
        break;
    case 2:
        console.log('2. Ingresar dinero');
        console.log('**************************************************');
        let ingreso = leerCantidadPositiva();
        console.log('Has ingresado '+ingreso+'€')
        total = total + ingreso;
        break;
    case 3:
        console.log('3. Retirar dinero');
        console.log('**************************************************');
        let retiro = leerCantidadPositiva();
        console.log('Has retirado '+retiro+'€');
        total = total - retiro;
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