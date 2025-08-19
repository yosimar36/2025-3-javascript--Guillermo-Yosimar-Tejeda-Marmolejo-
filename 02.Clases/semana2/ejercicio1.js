const { ask } = require("../helpers/input.js");
// for
async function saludar(nombre) {
    console.log(`hola estimado(o) : ${nombre}, espero que tenghas un buen dia`);
}
async function main() {
    const personas = ["ana", "juan", "karla", "maria", "pedro"];
    console.log("-------------ascendente--------------------");
    for (let i = 0; i < personas.length; i++) {
    saludar(personas[i]);
    }
    console.log("-------------descendente--------------------");
    for (let j = personas.length - 1; j >= 0; j--) {
    saludar(personas[j]);
    }

    //while

    let limite = number (await ask('hasta que numero quieres contar: '));
    let x = 1;
    while(x <= limite){
        console.log(x);
        x++;
    }
}
main();
