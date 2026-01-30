const prompt = require("prompt-sync")();
let altura = +prompt("Introduce la altura de la H (impar y >=5): ");
function H() {
  if (altura < 5 || altura % 2 === 0) {
    console.log("La altura debe ser un número impar mayor o igual que 5.");
    return;
  }

  const trazo = 3;
  const hueco = (altura - 1) / 2;
  const espacio = hueco * trazo;
  const filaCentral = (altura-1) / 2;

  for (let fila = 0; fila < altura; fila++) {
    if (fila === filaCentral) { 
      console.log("*".repeat(trazo + espacio + trazo));
    } else {
      let izquierda = "*".repeat(trazo);
      let hueco = " ".repeat(espacio);
      let derecha = "*".repeat(trazo);
      console.log(izquierda + hueco + derecha);
    }
  }
}

H();