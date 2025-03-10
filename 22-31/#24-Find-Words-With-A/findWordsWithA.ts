// Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a". (mayúscula o minúscula)

// INFO: Creo una función que reciba un array de textos y retorne un array solo con los textos que empiecen por la letra A (minúsculas y mayúsculas).
const empiezanConA = (textos:string[]):string[] => {
    // INFO: Inicializo la variable donde guardaré los textos
    let textoConA:string[] = [];
    // INFO: Itero en el array de los textos
    for (let i = 0; i < textos.length; i++) {
        // INFO: Transformo la primer letra de cada texto en minúscula, después, si la letra del texto es igual a la letra "a" la guardo en la variable textoConA
        if (textos[i][0].toLowerCase() === 'a') {
            textoConA.push(textos[i]);
        }
    }
    // INFO: Retorno las palabras que empiezan por la letra A
    return textoConA
}

console.log(empiezanConA(["Alan", "Alabama", "Arbol", "pelota", "marea", "agua", "palabra", "encontrar"]))