const prompt = require("prompt-sync")();

  let dias = 0;
  let bajoCero = 0;
  let templados = 0;
  let alta = 0;
  let suma = 0;
  let max = 0;
  let min = 0;

  while (true) {
    let temp = +prompt("Introduce la temperatura (999 para terminar): ");

    if (temp === 999) break; 

    if (temp < -50 || temp > 60) {
      console.log("Temperatura inválida, debe estar entre -50 y 60.");
    } else{
    dias++;
    suma += temp;
    if (temp < 0) bajoCero++;
    else if (temp <= 30) templados++;
    else if (temp > 30 && temp <= 60) alta++;

    if (temp > max) max = temp;
    if (temp < min) min = temp;
  }
}

  if (dias === 0) {
    console.log("No hay datos para calcular estadísticas.");
  } else {

    console.log("Días registrados:", dias);
    console.log("Bajo cero:", bajoCero);
    console.log("Templados:", templados);
    console.log("Alta:", alta);
    console.log("Media:", (suma / dias).toFixed(2));
    console.log("Máxima:", max);
    console.log("Mínima:", min);
  }