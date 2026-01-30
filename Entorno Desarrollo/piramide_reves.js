const prompt = require("prompt-sync")();

function piramidePorAnchura(anchura) {
    if (anchura <= 0) {
        return -1;
    }

    let altura = Math.ceil(anchura / 2);

    for (let i = 1; i <= altura; i++) {
        let espacios = " ".repeat(altura - i);
        let estrellas = "*".repeat(2 * i - 1);

        if (i === altura) {
            estrellas = "*".repeat(anchura);
            espacios = "";
        }

        console.log(espacios + estrellas);
    }

    return 0;
}

const w = Number(prompt("Introduce la anchura de la pirámide: "));
let resultado = piramidePorAnchura(w);

if (resultado === -1) {
    console.log("Anchura inválida (debes introducir un valor mayor que 0)");
}