const prompt = require('prompt-sync')();






console.log('num = $(num)');


let jugar = true;
let numAdivinar = 3;
let num;
while(jugar){

    num = entradaNumeroValidado();

    if (num === numAdivinar){
        
        jugar = false;
        console.log('Ganas!!');
    
    }else if (num > numAdivinar){

        console.log('Numero a adivinar es menor.');

    }else {


        console.log('Numero a adivinar es mayor.');
        
    }
}