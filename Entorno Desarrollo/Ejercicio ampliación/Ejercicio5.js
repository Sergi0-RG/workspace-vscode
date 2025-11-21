const prompt = require('prompt-sync')();
let numero = +prompt("Introduce un numero:");


for (let i=0;i<=numero; i++) {
    let factorial = 1;
    for (let j=2;j<=i;j++) {
         factorial*=j;
    }
        console.log(i+'! ='+factorial);

    }