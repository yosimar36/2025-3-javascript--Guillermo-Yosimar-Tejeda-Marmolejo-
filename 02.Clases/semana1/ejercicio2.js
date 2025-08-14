const { ask } = require('../helpers/input.js');

async function main() {
  const num1 = Number(await ask('Ingresa el primer número: '));

  const operador = await ask('Ingresa el operador que deseas usar: ');
  if (operador !== '+' && operador !== '-' && operador !== '/' && operador !== '*') {
    console.log('Operación no válida');
    return;
  }

  const num2 = Number(await ask('Ingresa el segundo número: '));

  let resultado = 0;
  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '/':
      if (num2 > 0) {
        resultado = num1 / num2;
      }
      else {
        console.log('El número a dividir debe de ser mayor a 0');
        return;
      }
      break;
    case '*':
      resultado = num1 * num2;
      break;
    default:
      return;
  }
  console.log('El resultado de la operación es: ', resultado);
}

main();