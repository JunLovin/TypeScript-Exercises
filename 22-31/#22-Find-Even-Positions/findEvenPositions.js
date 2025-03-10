"use strict";
// Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones donde se encuentran números pares.
// INFO: Creo una función que reciba un array de números y retorne un array con la posición de los números impares
const posiciones = (numeros) => {
    // INFO: Inicializo la variable en donde guardaré la posición de los valores pares
    let posiciones = [];
    // INFO: Itero en el array de números
    for (let i = 0; i < numeros.length; i++) {
        // INFO: Si el número es par, lo guardo en la variable posiciones
        if (numeros[i] % 2 === 0) {
            posiciones.push(i);
        }
    }
    // INFO: Retorno las posiciones
    return posiciones;
};
console.log(posiciones([1, 2, 3, 4, 5, 6]));
