let prompt = require('prompt-sync')();

let a = prompt('introduzca a');
console.log(typeof a)
let b = prompt('introduzca b');
console.log(typeof b)
bTemporal=b;

b=a;

a= bTemporal;

console.log (a= $(a), b= $(b));

console.log('a= '+a+ ', b = '+b);