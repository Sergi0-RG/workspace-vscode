const prompt = require("prompt-sync")();
let altura = +prompt("Introduce la altura de la pajarita (impar y >=3): ");

  if (altura < 3 || altura % 2 === 0) {
    console.log("La altura debe ser un número impar mayor o igual que 3.");
    return;
  }

  const mid = (altura - 1) / 2;

  for (let i = 0; i < altura; i++) {
    let asteriscos;
    if (i <= mid) {
     asteriscos = i + 1;
    } else {
     asteriscos = altura - i;
    }

    let espacios = altura - 2 * asteriscos+1; 
    if (espacios < 0) {
      espacios = 0;
    }

    let izquierda = "*".repeat (asteriscos);
    let hueco = " ".repeat(espacios);
    let derecha = "*".repeat (asteriscos);

    console.log(izquierda + hueco + derecha);
  }
