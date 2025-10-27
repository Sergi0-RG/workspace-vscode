var prompt = require('prompt-sync')();
let a = +prompt('Introduzca a: ')
let potencia = (a^2)
if (a>0) {
    console.log('Del numero '+a+', su potencia es '+Math.pow(a,2)+' y su raiz '+Math.pow(a,0.5))
} else{
    console.log('Error')
}