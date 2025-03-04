"use strict";
// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:
// INFO: Creo una función llamada capitalizarCadaPalabra que reciba un texto como parámetro y retorne un string con la primera letra de cada palabra en mayúscula.
const capitalizarCadaPalabra = (texto) => {
    // INFO: Si el texto está vacío, retorno el texto.
    if (!texto) {
        return texto;
    }
    // INFO: Separo el texto en un array de palabras.
    let textoEnArray = texto.split(' ');
    // INFO: Retorno el texto con la primera letra de cada palabra en mayúscula utilizando el método .map() y el método.join(). para hacerlo string
    return textoEnArray.map(palabra => {
        return palabra[0].toUpperCase() + palabra.slice(1);
    }).join(' ');
};
console.log(capitalizarCadaPalabra(''));
