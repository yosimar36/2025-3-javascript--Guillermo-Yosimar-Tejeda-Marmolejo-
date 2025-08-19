const {ask} = require ('../helpers/input.js');

async function main() {
    const frutas = ['fresas','mango','kiwi','manzana','uvas'];
    const cajon = Number (await ask('que cajon quieres abrir? (1-5)' ));
    for (let i = 1; i<= 5; i++){
        if(i === cajon){
            console.log('en el cajon ' + i + ' hay ' + frutas[i - 1]);
        }
    }
}

main ();