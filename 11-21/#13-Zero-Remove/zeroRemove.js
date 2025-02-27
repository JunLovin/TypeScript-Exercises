"use strict";
// Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).
const removerCeros = (arreglo) => {
    const result = arreglo.filter((numero) => numero !== 0);
    return result;
};
console.log(removerCeros([0, 0, 2, 3, 5, 0, 0, 0, 4, 5, 5]));
