const prompt = require("prompt-sync")();

let digitoSecreto1;
let digitoSecreto2;

function generarDigitoSecreto() {
  return Math.floor(Math.random() * 10);
}

function generarCodigoSecreto() {
  digitoSecreto1 = generarDigitoSecreto();
  digitoSecreto2 = generarDigitoSecreto();
}
let intento1;
let intento2;

function leerIntento() {
  while (true) {
    intento1 = +prompt("Introduce el primer dígito (0-9): ");
    intento2 = +prompt("Introduce el segundo dígito (0-9): ");

    if ((intento1 >= 0 && intento1 <= 9) && (intento2 >= 0 && intento2 <= 9)) {
      return;  
    } else {
      console.log("Entrada inválida. Debes introducir dos enteros entre 0 y 9.");
    }
  }
}

function evaluarIntento(digitoSecreto, intento) {
  if (intento === digitoSecreto) {
    return 0;   
  } else if (intento > digitoSecreto) {
    return -1;  
  } else {
    return 1;   
  }
}

function jugarCajaFuerte() {
  generarCodigoSecreto();
  console.log("La clave de la caja fuerte tiene 2 dígitos entre 0 y 9.");
  console.log("Intenta descubrirlos...");

  let abierto = false;

  while (!abierto) {
    leerIntento(); 

    const resultado1 = evaluarIntento(digitoSecreto1, intento1);
    const resultado2 = evaluarIntento(digitoSecreto2, intento2);


    if (resultado1 === 0) {
      console.log("El primer dígito es correcto.");
    } else if (resultado1 === -1) {
      console.log("El primer dígito es mayor que el secreto.");
    } else {
      console.log("El primer dígito es menor que el secreto.");
    }


    if (resultado2 === 0) {
      console.log("El segundo dígito es correcto.");
    } else if (resultado2 === -1) {
      console.log("El segundo dígito es mayor que el secreto.");
    } else {
      console.log("El segundo dígito es menor que el secreto.");
    }


    if (resultado1 === 0 && resultado2 === 0) {
      console.log(`¡Has abierto la caja fuerte! La clave era ${digitoSecreto1} ${digitoSecreto2}.`);
      abierto = true;
    }
  }
}

jugarCajaFuerte();