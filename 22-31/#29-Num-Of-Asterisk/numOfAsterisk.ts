// Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos

// INFO: Creo una función que reciba un arreglo y retorne el número de asteriscos
const numAsteriscos = (asteriscos:string[]):number => {
    // INFO: Inicializo el contador de asteriscos
    let totalAsterisk:number = 0
    // INFO: Recorro el array de strings
    for (let i = 0; i < asteriscos.length; i++) {
        // INFO: Si el string contiene un asterisco, incremento el contador
        if (asteriscos[i].includes('*')) {
            totalAsterisk++
        }
    }
    // INFO: Retorno el contador
    return totalAsterisk
}

console.log(numAsteriscos(['', '*', '', '*']))