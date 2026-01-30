//rombo
const prompt = require(`prompt-sync`)();

function rombo (alto) {

     let piso = 1;

     if (alto%2 == 0 || alto <= 0){
          return console.log("-1 Error");
     }

     let espacio = alto / 2-0.5;

     for (let i = espacio+1; i > 0 ; i--) {
          console.log(" ".repeat(i-1) + "*".repeat(piso))
          piso += 2 ;
     }

     piso -= 4;
  
     for (let j = 1 ; j <= espacio ; j++) {

          console.log(" ".repeat(j) + "*".repeat(piso))
          piso -= 2;
     }
}

rombo(5)