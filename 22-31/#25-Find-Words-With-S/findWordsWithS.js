"use strict";
// Crear una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúsculas o minúsculas).
// INFO: Creo una función que reciba un array de textos y retorne un array solo con los textos que terminan por la letra S (minúsculas y mayúsculas).
const terminanConS = (textos) => {
    // INFO: Inicializo la variable donde guardaré los textos
    let palabrasConS = [];
    // INFO: Itero en el array de los textos
    for (let i = 0; i < textos.length; i++) {
        // INFO: Transformo la última letra de cada texto en minúscula, después, si la letra del texto es igual a la letra "s" la guardo en la variable palabrasConS
        if (textos[i][textos[i].length - 1].toLowerCase() === 's') { // Resto 1 porque se empieza a contar desde 0, por ejemplo: "pruebas", p = 0, r = 1, u = 2, e = 3, b = 4, a = 5, s = 6 y length nos da 7 ya que length cuesta desde el número 1 y no 0, por lo que si quiero acceder al último carácter tengo que restarle 1.
            // INFO: Si se cumple la condición guardo el texto en la variable palabrasConS
            palabrasConS.push(textos[i]);
        }
    }
    // INFO: Retorno las palabras que terminan por la letra S
    return palabrasConS;
};
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"]));
