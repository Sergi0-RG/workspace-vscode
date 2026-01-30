//piramide invertida
const prompt = require("prompt-sync")();

function piramideInvertida(altura) {
    if (altura <= 0) {
        return -1; 
    }

    for (let i = 0; i < altura; i++) {
        let espacios = ' '.repeat(i);
        let estrellas = '*'.repeat(2 * (altura - i) - 1);
        console.log(espacios + estrellas);
    }

    return 0; 
}

const h = Number(prompt("Introduce la altura de la pirámide: "));
let resultado = piramideInvertida(h);

if (resultado === -1) {
    console.log("Altura invalida(debes introducir un valor mayor de 0");
}