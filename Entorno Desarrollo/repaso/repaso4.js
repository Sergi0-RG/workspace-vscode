//sueldos
let prompt = require ('prompt-sync')();
console.log ("empresa")
let numeropersonas;
let sueldo;
let max= -Infinity;
let min= +Infinity;
let suma=0;
let menos1000=0;
let entre1000y2000=0;
let mas2000=0;
let media;
 do {
    numeropersonas=Number(prompt("introduzca numero de personas")); 
 }
 while (numeropersonas<=0);

 for (let i=numeropersonas;i>0;i--){
    sueldo=Number(prompt("cuanto cobras?"))
    if (sueldo<=0){
        i++;
    }
    else{
     suma+=sueldo;
    }
    if (sueldo>max){
        max=sueldo;
    }
    if (sueldo<min){
        min=sueldo;
    }
    if(sueldo<1000){
        menos1000++;
    }
    if (sueldo>=1000 && sueldo<=2000){
        entre1000y2000++;
    }
    if (sueldo>2000) {
        mas2000++;
    }


 }

 media=suma/numeropersonas;

 console.log(`el minimo es ${min}`);
 console.log(`el maximo es ${max}`);
 console.log(`cobran menos de 1000: ${menos1000}`);
 console.log (`cobran entre 1000 y 2000: ${entre1000y2000}`);
 console.log(`cobran mas de 2000 ${mas2000}`);
 console.log(`la media es ${media}`);