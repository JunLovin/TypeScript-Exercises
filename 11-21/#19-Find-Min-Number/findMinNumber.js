"use strict";
// Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:
// NOTE: Intentarlo hacer sin el método Math.min de JavaScript.
const min = (numbers) => {
    let n = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < n) {
            n = numbers[i];
        }
    }
    return n;
};
console.log(min([63, 35, 54, 26]));
