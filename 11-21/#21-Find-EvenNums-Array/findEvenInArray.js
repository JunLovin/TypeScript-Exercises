"use strict";
// Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.
// INFO: Creo una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.
const pares = (numeros) => {
    if (!numeros)
        return numeros;
    // INFO: Inicializo la variable en donde almacenaré los números pares
    let pares = [];
    // INFO: Itero el array de números
    for (let i = 0; i < numeros.length; i++) {
        // INFO: Si el número en la posición i del array es par, entonces lo agrego al array pares
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
    // INFO: Retorno pares
    return pares;
};
console.log(pares([1, 2, 3, 4, 5, 6]));
