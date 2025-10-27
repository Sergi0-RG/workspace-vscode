var prompt = require('prompt-sync')();
let bachillerato = prompt('¿Tienes título de bachiller? (si/no): ');
if (bachillerato == 'si') {
  console.log('Puedes cursarlo.');
} else {
  let pruebaAcceso = prompt('¿Has superado la prueba de acceso? (si/no): ');
  
  if (pruebaAcceso =='si') {
    console.log('Puedes cursarlo.');
  } else {
    console.log('No puedes cursar.');
  }
}