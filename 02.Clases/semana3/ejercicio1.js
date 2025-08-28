const { ask } = require("../helpers/input.js");

async function main(){
    const personas = [
        {
            nombre: "alejandra",
            edad: 28,
            ocupacio: "desarrollador",
            saludar: function(){
                console.log(`hola mi nombre es ${this.nombre}`);
            }
        },
        {
            nombre: "carlos",
            edad: 36,
            ocupacio: "desarrollador",
            saludar: function(){
                console.log(`hola mi nombre es ${this.nombre}`);
        }
    }
    ];
    personas [0].saludar();
    personas [1].saludar();

}
main();