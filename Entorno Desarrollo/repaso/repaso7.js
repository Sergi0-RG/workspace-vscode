// hacer una casa con  el simbolo "*"

// Pedimos datos al usuario
const prompt = require("prompt-sync")();

let alto = Number(prompt("Dime la altura de la casa: "));
let ancho = Number(prompt("Dime el ancho de la casa: "));

// Dibujar el techo (un triángulo)
for (let i = 0; i < alto / 2; i++) {
    let fila = "";
    for (let j = 0; j < ancho; j++) {
        if (j >= (ancho / 2 - i) && j <= (ancho / 2 + i)) {
            fila += "*";
        } else {
            fila += " ";
        }
    }
    console.log(fila);
}

// Dibujar el cuerpo (un rectángulo)
for (let i = 0; i < alto / 2; i++) {
    let fila = "";
    for (let j = 0; j < ancho; j++) {
        if (j === 0 || j === ancho - 1 || i === alto / 2 - 1) {
            fila += "*";
        } else {
            fila += " ";
        }
    }
    console.log(fila);
}