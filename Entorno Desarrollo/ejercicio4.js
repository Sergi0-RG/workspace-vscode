var prompt = require('prompt-sync')();
let a = +prompt('Introduzca a:')
let b = +prompt('Introduce b:')
let c = +prompt('Introduce c: ')
if (a<0) {
    console.log('El producto= '+a*b*c)
}else {
    console.log('La suma = '+(a+b+c))
}