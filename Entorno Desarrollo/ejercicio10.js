var prompt = require('prompt-sync')();
let dia = +prompt('Introduce el día: ');
let mes = +prompt('Introduce el mes (número): ');
let año = +prompt('Introduce el año: ');

let meses = [   
  '', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

// Función para saber si el año es bisiesto
function esBisiesto(año) {
  return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}

// Días máximos por mes
let diasPorMes = [0, 31, esBisiesto(año) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (año <= 0 || mes < 1 || mes > 12 || dia < 1 || dia > diasPorMes[mes]) {
  console.log('Error: la fecha introducida no es válida.');
} else {
  console.log(`${dia} de ${meses[mes]} de ${año}`);
}