// Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN)
// Los complementos son los siguientes:
/**
 * G -> C
 * C -> G
 * T -> A
 * A -> U
 */

// INFO: Creo una función que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN)
const adnArn = (adn:string):string => {
    // INFO: Inicializo una variable llamada resultado que contendrá el resultado de la cadena de ARN.
    let resultado:string[] = []
    // INFO: Creo una variable llamada prefijosAdn que tenga los valores de ADN
    let prefijosAdn:string[] = ['G', 'C', 'T', 'A']
    // INFO: Creo una variable llamada prefijosArn que tenga los valores de ARN
    let prefijosArn:string[] = ['C', 'G', 'A', 'U']
    // INFO: Recorro el array de ADN, comparando cada letra con los prefijos de ADN y si son iguales, agrego el prefijo de ARN a la variable resultado.
    for (let i = 0; i < adn.length; i++) {
        for (let j = 0; j < prefijosAdn.length; j++) {
            if (adn[i] === prefijosAdn[j]) {
                resultado = [...resultado, prefijosArn[j]]
            }
        }
    }
    // INFO: Retorno el resultado.
    return resultado.join('')
}

console.log(adnArn('ACGTGGTCTTAA'))