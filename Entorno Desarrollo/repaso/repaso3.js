//cajero
const prompt = require(`prompt-sync`)();
let saldo = 10000;
let opcion = 0;

function leerOpcionMenu() {
     
     do {

          console.log("1. Consultar saldo");
          console.log("2. Ingresar dinero");
          console.log("3. Retirar dinero");
          console.log("4. Salir");
          let opcion = Number(prompt("Escribe una opcion: "))

               switch(opcion) {
          case 1:
               console.log(saldo)
               break;
          case 2:
               saldo = actualizarSaldo(saldo, leerCantidadPositiva(), 1)
               break;
          case 3:
               saldo = actualizarSaldo(saldo, leerCantidadPositiva(), 2)
               break;
          case 4:
               return console.log("Gracias por usar nuestro banco");
          default:
               console.log("Opcion no valida");
          }

          } while ( opcion !== 4 );

}

function leerCantidadPositiva() {
     let numero = Number(prompt("Ingrese una cantidad: "))

     while (numero <= 0){
          console.log("Escribe un numero mayor a cero");
     }

     return numero;
}

function actualizarSaldo(saldo, cantidad, tipoOperacion) {

     if (tipoOperacion == 1) {
          saldo += cantidad;
          console.log(`Nuevo saldo ${saldo}`); 
          return saldo;
     } else {
          if (cantidad > saldo){
               cantidad = 0;
               return "-1";
          }else{
               saldo -= cantidad;
               console.log(`Nuevo saldo ${saldo}`); 
               return saldo;
          }
     }

}





leerOpcionMenu();