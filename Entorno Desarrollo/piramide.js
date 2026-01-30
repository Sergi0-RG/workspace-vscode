// piramide normal
const prompt = require("prompt-sync")();

function piramide(altura) {
    if (altura <= 0) {
        return -1;
    }

    for (let i = 0; i < altura; i++) {
        let espacios = ' '.repeat(altura - i - 1);  
        let estrellas = '*'.repeat(2 * i + 1);      
        console.log(espacios + estrellas);
    }

    return 0;
}

const h = Number(prompt("Introduce la altura de la pirámide: "));
let resultado = piramide(h);

if (resultado === -1) {
    console.log("Altura inválida (debes introducir un valor mayor que 0)");
}
