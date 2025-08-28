const { ask } = require("../helpers/input.js");

function obtenerPromedio(numeros){
    let total = 0;
    for(let i = 0; i< numeros.length; i++){
        total = total + numeros[i];
    }
    return(total / numeros.length);
}

function obtenerAprobados(numeros){
    let aprobados = 0;
    for (let i = 0; i< numeros.length; i++){
        if (numeros[i] >=70){
            aprobados++;
        }else {
            reprobados++;
        }
    }



}
main();