// Importa la función 'ask' para pedir datos al usuario.
const { ask } = require('../helpers/input.js');

// Define la función principal del programa.
async function main() {
  // Pide al usuario que escriba una palabra y la guarda en la variable 'palabra'.
  const palabra = await ask('Escribe una palabra: ');
  let resultado = ''; // Variable para guardar la palabra al revés.

  // Recorre la palabra desde el final hasta el principio.
  for (let i = palabra.length - 1; i >= 0; i--) {
    resultado = resultado + palabra[i]; // Agrega cada letra al resultado.
  }

  // Muestra la palabra al revés en la consola.
  console.log('Tu palabra al revés es: ', resultado);
}

// Ejecuta la función principal para iniciar el programa.
main();