"use strict";
// Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:
const numAsteriscosEnMatriz = (asteriscos) => {
    let numeroDeAsteriscos = 0;
    for (let i = 0; i < asteriscos.length; i++) {
        for (let j = 0; j < asteriscos[i].length; j++) {
            if (asteriscos[i][j].includes('*')) {
                numeroDeAsteriscos++;
            }
        }
    }
    return numeroDeAsteriscos;
};
console.log(numAsteriscosEnMatriz([['*', '', '*'], ['', '*', ''], ['*', '', '*']]));
