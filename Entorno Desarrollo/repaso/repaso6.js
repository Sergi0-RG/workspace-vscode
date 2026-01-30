const prompt = require("prompt-sync")();

function dibujarCasa() {
  let lado = +prompt("Tamaño del lado: ");

  if (lado <= 0) {
    console.log("Número inválido.");
    return;
  }

  let nivelesTecho = Math.ceil(lado / 2);

  // Techo
  for (let i = 1; i <= nivelesTecho; i++) {
    let estrellas;

    if (i === nivelesTecho) {
      estrellas = lado;
    } else {
      estrellas = 2 * i - 1;
    }

    let espacios = Math.floor((lado - estrellas) / 2);

    console.log(" ".repeat(espacios) + "*".repeat(estrellas));
  }

  // Paredes
  for (let i = 0; i < lado; i++) {
    console.log("*".repeat(lado));
  }
}

dibujarCasa();
