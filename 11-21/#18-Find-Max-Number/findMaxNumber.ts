// Escribir una función llamada max que reciba un array de números y retorne el mayor.
// NOTE: Intentarlo hacer sin el método Math.max de JavaScript.

// INFO: Creo una función llamada max que tenga como parámetro un array de números y que retornará el número mayor dentro del array
const max = (numeros:number[]):number => {
    // INFO: Inicializo la variable en donde almacenaré el número mayor
    let n:number = 0;
    // INFO: Itero el array de números
    for (let i = 0; i < numeros.length; i++) {
        // INFO: Si el número en la posición i del array es mayor a n, entonces n toma el valor de ese número 
        if (numeros[i] > n) { // primera vuelta: n = 0; numeros[i] = 5; 5 > 0, entonces n = 5, segunda vuelta: n = 5; numeros[i] = 8; 8 > 5, entonces n = 8, etc.
            n = numeros[i]
        }
    }
    // INFO: Retorno n
    return n
}
console.log(max([5, 8, 9, 1, 0, 13, 4, 2, 199]))