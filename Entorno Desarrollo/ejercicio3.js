var prompt = require('prompt-sync')();
let a = prompt('Introduzca a:')
let b = prompt('Introduce b:')
if (a>b) {
    console.log('El numero '+a+' > '+b);
} else if (a<b){
    console.log('El numero '+a+' < '+b);
} else {
    console.log('El numero '+a+' = '+b);
}