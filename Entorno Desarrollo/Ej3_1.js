let prompt = require('prompt-sync')();
let personas = prompt('introduce numero de personas: ');
let conHijos = 0;
let sinHijos = 0;
let sumaHijos = 0;
let maxHijos = 0;
let minHijos = 0;

for (let i = 0; i < personas; i++) {
  let hijos;

  do {
   hijos = prompt('Ingrese la cantidad de hijos de la persona:');
    if (hijos < 0) {
      console.log('ERROR: La cantidad de hijos no puede ser negativa.');
    }
  } while (hijos < 0);
  sumaHijos += hijos;

  if (hijos > 0) {
    conHijos++;
  } else {
    sinHijos++;
  }

  if (hijos > maxHijos) {
    maxHijos = hijos;
  }

  if (minHijos === null || hijos < minHijos) {
    minHijos = hijos;
  }
}

let promedio = sumaHijos / personas;

console.log("\n--- Cuadro Resumen ---");
console.log("Personas con hijos:", conHijos);
console.log("Personas sin hijos:", sinHijos);
console.log("Promedio de hijos por persona:", promedio);
console.log("Máximo número de hijos:", maxHijos);
console.log("Mínimo número de hijos:", minHijos);