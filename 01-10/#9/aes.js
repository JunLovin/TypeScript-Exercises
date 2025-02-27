"use strict";
// Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a"
// INFO: Creo una función llamada numeroDeAes que tenga como parámetro un texto y retorne un número
const numeroDeAes = (texto) => {
    // INFO: Si el texto no tiene nada que imprima en consola
    if (!texto)
        return 0;
    // INFO: El texto pasado lo convierto en minúscula para contar todas las letras de forma correcta.
    let textoEnMinuscula = texto.toLowerCase();
    // INFO: Creo una variable en donde almacenaré la letra que voy a contar
    const letraA = 'a';
    // INFO: Creo una variable la cual será el contador de las veces que se repita la letra
    let contador = 0;
    // INFO: Itero por todo el texto
    for (let i = 0; i < textoEnMinuscula.length; i++) {
        // INFO: Si el carácter del texto es igual a la letra se suma 1 al contador
        if (textoEnMinuscula[i] === letraA) {
            contador++;
        }
    }
    // INFO: Retorno el contador
    return contador;
};
const texto = "aaaaaaaaaa";
console.log(numeroDeAes(texto));
