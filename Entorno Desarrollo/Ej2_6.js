var prompt = require('prompt-sync')();
let intentos = 3;
while (intentos>0){
    let clave = prompt('Introduce una clave: ');
    if (clave ==("eureka")){
        console.log('Has accedido');
    }else{
        intentos = intentos-1;
        console.log('Clave incorrecta, tienes '+intentos+' intentos mas.');
    }

}
    if (intentos=0){
        console.log('Has agotado los intentos')
    }