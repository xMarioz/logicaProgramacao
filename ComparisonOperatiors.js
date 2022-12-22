/**
 * Usando let, crie uma variável chamada hungerLevele defina-a igual a 7.
 * Escreva uma if...elseinstrução usando um operador de comparação.
 * A condição deve verificar se hungerLevel é maior que 7.
 * Nesse caso, a instrução condicional deve registrar, 'Time to eat!'. Caso contrário, ele deve registrar 'We can eat later!'.
Depois brinque com a condição ajustando a comparação hungerLevel usando operadores diferentes, como <=, >=, >e <.
 */

// If
let venda = false;
if (venda) {
    console.log('Hora de comprar');
} else {
    console.log('Hora de esperar pela venda');
}

// Comparações
let nivelDeFome = 9;
if (nivelDeFome >= 9) {
    console.log('Coma agora!');
} else {
    console.log('Espera chegar em casa');
}

// igualdade == e ===
// diferença != ou !==
console.log('maca' === 'laranja')
console.log(8 === 8)
console.log(8 != 8)

// operador And = &&

/* if (trafficLight === 'green' && pedestrians === 0) {
    console.log('Go!');
} else {
    console.log('Stop');
}*/

// operador Or = ||

/* if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
} else {
    console.log('Do some work.');
}*/

// antigo

// let username = ' ';
// let defaultName;

// if (username) {
//     defaultName = username;
// } else {
//     defaultName = 'Stranger';
// }

// console.log(defaultName);

// novo

let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName);