// Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:

// INFO: Creo una función que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:
const numAsteriscosEnMatriz = (asteriscos:string[][]):number => { 
    // INFO: Inicializo el contador de asteriscos
    let numeroDeAsteriscos:number = 0;
    // INFO: Recorro la matriz
    for (let i = 0; i < asteriscos.length; i++) {
        // INFO: Recorro cada array dentro de la matriz
        for (let j = 0; j < asteriscos[i].length; j++) {
            // INFO: Si el string contiene un asterisco, incremento el contador
            if (asteriscos[i][j].includes('*')) {
                numeroDeAsteriscos++
            }
        }
    }
    // INFO: Retorno el contador
    return numeroDeAsteriscos
}

console.log(numAsteriscosEnMatriz([['*', '', '*'], ['', '*', ''], ['*', '', '*']]))