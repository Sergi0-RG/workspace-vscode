//ocho
const prompt = require(`prompt-sync`)();

let altura = Number(prompt("Escribe como de alto quieres que sea el 8: "));
let borde = "*".repeat(3);


for (let i = 2 ; i > 0 ; i-- ) {
     console.log(borde + "*".repeat(3*altura) + borde)
     console.log(borde + "*".repeat(3*altura) + borde)

     for (let j = altura ; j > 0; j-- ) {
          console.log(borde + " ".repeat(altura*3) + borde);
     }
}

     console.log(borde + "*".repeat(3*altura) + borde)
     console.log(borde + "*".repeat(3*altura) + borde)