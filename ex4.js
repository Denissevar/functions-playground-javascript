/**
 * Implementa una función que simule el lanzamiento de un dado de 6 caras.
 */

function rollDice() {
    // COMPLETAR
    let result = Math.floor(Math.random()*6) + 1;
    return result;
}

console.log(rollDice()); // Un número entre 1 y 6
console.log(rollDice()); // Un número entre 1 y 6
console.log(rollDice()); // Un número entre 1 y 6

