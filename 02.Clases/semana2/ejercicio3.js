const { ask } = require("../helpers/input.js");
async function main() {
  let opcion = "";
  let frutas = [];
  //que deseas hacer
  //1. agregar una fruta
  //2. eliminar una fruta
  //3. salir

  while (opcion !== "3") {
    opcion = await ask(
      `que deseas hacer? \n1. agregar una fruta \n2. eliminar una fruta \n3. salir \nopcion seleccionada = `
    );

    if (opcion === "1") {
      let frutaNueva = await ask("que fruta deceas agregar?: ");
      frutas.push(frutaNueva);
      console.log("futa agregada: ", frutaNueva);
      console.log("frutas disponibles: ", frutas);

    } else if (opcion === "2") {
      if (frutas.length === 0) {
        console.log("no hay frutas disponibles");
        continue;
      } else {
        let frutaEliminar = await ask("que fruta deseas eliminar?: ");
        let index = frutas.indexOf(frutaEliminar);

        if (index !== -1) {
          frutas.splice(index, 1);
          console.log(`${frutaEliminar} ha sido eliminada`);
        } else {
          console.log("fruta no encontrada");
        }
        console.log("frutas disponibles", frutas);
      }
      
    } else if (opcion === "3") {
      console.log("gracias");
    } else {
      console.log("opcion invalida");
    }
  }
}

main();
