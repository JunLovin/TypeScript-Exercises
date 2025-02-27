// Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.

// INFO: Defino una función que multiplique los números dentro de un array, que tenga como parámetro un arreglo de números y retorne la multiplicaión de los multiplicación de todos los números dentro.
const multiplicarArreglo = (arreglo:number[]):number => {
    // INFO: Si el arreglo no tiene ningún numero retorno 0
    if (arreglo.length === 0) {
        return 0
        // INFO: Si el arreglo solamente tiene un número retorno el número
    } else if (arreglo.length === 1) {
        return arreglo[0]
    } else {        
        // INFO: Defino una variable llamada resultado que será igual a la primer posición del array
        let resultado = arreglo[0];
        // INFO: Recorro el array desde la segunda posición (arreglo[1]) con un for y voy multiplicando a la variable resultado
        for (let i = 1; i < arreglo.length; i++) {
            resultado *= arreglo[i]
        }
        // INFO: Retorno el resultado
        return resultado
    }
}

console.log(multiplicarArreglo([2, 12]))