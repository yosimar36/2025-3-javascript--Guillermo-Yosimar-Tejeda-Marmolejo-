//contar cuantos de una lista de edades puede
//instrucciones
//crear un arreglo de edades (pedirlo al usuario)
//recorre el arreglo
//cuenta cuantos tienen 18 años o mas 
//muestra el total
//op 1 = agregar una edad
//op 2 = mostrar analisis
//op 3 = salir 

// Importa la función 'ask' para pedir datos al usuario.
const { ask } = require('../helpers/input.js');

// Define la función principal del programa.
async function main() {
  let opcion = ''; // Variable para guardar la opción elegida por el usuario.
  let edades = []; // Lista para guardar las edades que el usuario ingresa.

  // El ciclo while se repite mientras la opción no sea '3' (Salir).
  while (opcion !== '3') {
    // Muestra el menú de opciones y espera la respuesta del usuario.
    opcion = await ask(`¿Que deseas hacer?
      \n1. Agregar una edad.
      \n2. Mostrar análisis.
      \n3. Salir.\n`);

    // Si el usuario elige '1', agrega una nueva edad a la lista.
    if (opcion === '1') {
      const edadNueva = Number(await ask('¿Qué edad vas a ingresar?')); // Pide la edad y la convierte a número.
      edades.push(edadNueva); // Agrega la edad al final de la lista.
      // Si el usuario elige '2', muestra el análisis de las edades.
    } else if (opcion === '2') {
      let mayores = 0; // Variable para contar cuántos son mayores de edad.
      for (let i = 0; i < edades.length; i++) { // Recorre todas las edades.
        if (edades[i] >= 18) { // Si la edad es 18 o más...
          mayores++; // Suma uno al contador de mayores.
        }
      }
      // Muestra el total de edades y cuántos son mayores de edad.
      console.log(`De un total de: ${edades.length} edades, ${mayores} son mayores de edad`);
      // Si el usuario elige '3', muestra un mensaje de despedida.
    } else if (opcion === '3') {
      console.log('Gracias');
      // Si el usuario escribe una opción inválida, muestra un mensaje de error.
    } else {
      console.log('Opción inválida');
    }
  }
}

// Ejecuta la función principal para iniciar el programa.
main();