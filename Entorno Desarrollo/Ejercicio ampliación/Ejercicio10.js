const prompt = require('prompt-sync')();

let n = +prompt("¿Cuántos trabajadores quieres registrar? ");

for (let i = 1; i <= n; i++) {
    console.log("Trabajador "+i+":");

    let puesto = prompt("Introduce el puesto (licenciado, técnico, obrero): ");
    let turno = prompt("Introduce el turno (primero, segundo, tercero): ");
    let horas = +prompt("Introduce las horas trabajadas esta semana: ");

    let tarifa = 0;
    if (puesto === "licenciado") {
        tarifa = 100;
    } else if (puesto === "técnico") {
        tarifa = 50;
    } else if (puesto === "obrero") {
        tarifa = 30;
    } else {
        console.log("Puesto no válido.");
    }

    let bono = 0;
    if (turno === "primero") {
        bono = 200;
    } else if (turno === "segundo") {
        bono = 100;
    } else if (turno === "tercero") {
        bono = 300;
    } else {
        console.log("Turno no válido");
    }

    let salario = (tarifa * horas) + bono;

    console.log("Salario semanal del trabajador "+i+ "es de:" +salario+ "€");
}