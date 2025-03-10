"use strict";
// Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).
// INFO: Creo una función que reciba un array de números y retorne un array con los números duplicados
const duplicar = (numeros) => {
    // INFO: Inicializo la variable en donde guardaré los números duplicados
    let duplicados = [];
    // INFO: Itero en el array de números
    for (let i = 0; i < numeros.length; i++) {
        // INFO: Multiplico el número por 2 y lo guardo en la variable duplicados
        duplicados.push(numeros[i] * 2);
    }
    // INFO: Retorno los números duplicados
    return duplicados;
};
console.log(duplicar([1, 2, 3]));
