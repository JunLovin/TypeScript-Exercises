// Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:
// NOTE: Intentarlo hacer sin el método Math.min de JavaScript.

// INFO: Creo una función llamada min que tenga como parámetro un array de números y que retornará el número menor dentro del array
const min = (numbers:number[]):number => {
    // INFO: Inicializo la variable en donde almacenaré el número menor
    let n:number = numbers[0];
    // INFO: Itero el array de números
    for (let i = 0; i < numbers.length; i++) {
        // INFO: Si el número en la posición i del array es menor a n, entonces n toma el valor de ese número
        if (numbers[i] < n) { // primera vuelta: n = 63; numbers[i] = 35; 35 < 63, entonces n = 35, segunda vuelta: n = 35; numbers[i] = 54; 54 < 35, entonces n = 54, etc.
            n = numbers[i]
        }
    }
    // INFO: Retorno n
    return n
}

console.log(min([63, 35, 54, 26]));