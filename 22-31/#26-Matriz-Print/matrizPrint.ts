// Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.

// INFO: Creo una función que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.
const imprimirMatriz = (matriz:number[][]):void => {
    // INFO: Itero en la matriz
    for (let i = 0; i < matriz.length; i++) {
        // INFO: Itero en cada arreglo de la matriz
        for (let j = 0; j < matriz[i].length; j++) {
            // INFO: Imprimo cada elemento de la matriz
            console.log(matriz[i][j]);
        }
    }
}

imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])