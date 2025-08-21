const {ask} = require ('../helpers/input');

function obtenerPromedio(numeros){
    let total = 0;
    for (let i = 0; i < numeros.length; i++ ){
        total = total + numeros[i];
    }
    const promedio = total / numeros.length;

    return promedio;
}

function obtenerMayor(numeros){
    let mayor = numeros[0];
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > mayor){
            mayor  = numeros[i];
        }
    }
    return mayor;
}

function obtenerMenor(numeros){
    let menor = numeros [0];
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] < menor){
            menor = numeros[i];
        }
    }
    return menor;
}

function resumenEstadistico(numeros){
    const promedio = obtenerPromedio(numeros);
    const mayor = obtenerMayor(numeros);
    const menor = obtenerMenor(numeros);
    return {'promedio':promedio, 'mayor':mayor, 'menor':menor};
    return { promedio, mayor, menor};
}

function nombreConVocal(nombres){
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    const resultado = [];

    for (let i = 0; i < nombres.length; i ++){
        let primerLetra = nombres[i][0].toLowerCase();
       // for (let j = 0; j < vocales.length; j++){
       // if (vocales[j] === primerLetra){
       //     resultado.push(nombres[i]);
       // }
       // }
        if (vocales.includes(primerLetra)){
            resultado.push(nombres[i]);
        }
    }
    return resultado;
}

async function main() {
   const edades = [20, 18, 25, 30, 22];
   const lista = [5, 20, 8, 99, 3];
   const datos = [70, 80, 90, 100, 85];
   const nombres = ['Ana','Esteban', 'Luis', 'Oscar', 'Maria' ]; 
    console.log(`promedio de edades = ${obtenerPromedio(edades)}`);
    console.log(`el numero mayor de: ${lista} = ${obtenerMayor(lista)}`);
    console.log(`el numero menor de: ${lista} = ${obtenerMenor(lista)}`);
    const estadisticas = resumenEstadistico(datos);
    console.log(estadisticas);
    console.log(`el resumen estadistico de: ${datos} es: `);
    console.log(`promedio: ${estadisticas.promedio}`);
    console.log(`mayor: ${estadisticas.mayor}`);
    console.log(`menor: ${estadisticas.menor}`);
    console.log(`nombres con vocal: ${nombreConVocal(nombres)}`);
}

main();