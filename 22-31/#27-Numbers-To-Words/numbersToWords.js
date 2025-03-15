"use strict";
// Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada uno en el rango de 0 a 0) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.
// INFO: Creo una función que reciba un arreglo de números (cada uno en el rango de 0 a 0) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.
const numerosAPalabras = (numeros) => {
    // INFO: Inicializo el array que contendrá las palabras
    const palabras = [];
    // INFO: Recorro el array de números
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === 0) {
            palabras.push("Cero");
        }
        else if (numeros[i] === 1) {
            palabras.push("Uno");
        }
        else if (numeros[i] === 2) {
            palabras.push("Dos");
        }
        else if (numeros[i] === 3) {
            palabras.push("Tres");
        }
        else if (numeros[i] === 4) {
            palabras.push("Cuatro");
        }
        else if (numeros[i] === 5) {
            palabras.push("Cinco");
        }
        else if (numeros[i] === 6) {
            palabras.push("Seis");
        }
        else if (numeros[i] === 7) {
            palabras.push("Siete");
        }
        else if (numeros[i] === 8) {
            palabras.push("Ocho");
        }
        else if (numeros[i] === 9) {
            palabras.push("Nueve");
        }
        else if (numeros[i] > 9 || numeros[i] < 0) {
            return palabras;
        }
    }
    return palabras;
};
console.log(numerosAPalabras([1, 2, 3]));
