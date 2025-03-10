"use strict";
// Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a". (mayúscula o minúscula)
const empiezanConA = (textos) => {
    let textoConA = [];
    for (let i = 0; i < textos.length; i++) {
        if (textos[i][0].toLowerCase() === 'a') {
            textoConA.push(textos[i]);
        }
    }
    return textoConA;
};
console.log(empiezanConA(["Alan", "Alabama", "Arbol", "pelota", "marea", "agua", "palabra", "encontrar"]));
