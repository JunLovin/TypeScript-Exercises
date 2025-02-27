// Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).

// INFO: Creo una función que remueva los 0 dentro de un array y retorne el array sin los 0
const removerCeros = (arreglo:number[]):number[] => {
    // INFO: Creo una variable llamada resultado en donde guardaré el nuevo arreglo sin los 0
    const result = arreglo.filter((numero) => numero !== 0) // INFO: Filtro todos los elementos dentro del array, si son diferentes a 0 se mantienen, sino se filtran.
    // INFO: Retorno la variable resultado
    return result
}

console.log(removerCeros([0, 0, 2, 3, 5, 0, 0, 0, 4, 5, 5]))