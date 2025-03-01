// Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

// NOTE: puedes asumir que la posición incial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.

// INFO: Creo una función que reciba un array de números, una posición inicial y posición final.
export const sumarArreglo = (arr: number[], posicionInicial: number, posicionFinal: number):number => {
    // INFO: Inicializo una variable llamada resultado que contendrá el resultado de la suma de los números dentro del rango.
    let resultado: number = 0;
    // INFO: Recorro el array desde la posición inicial hasta la posición final, sumando cada número al resultado.
    for (let i = posicionInicial; i <= posicionFinal; i++) {
        // INFO: Sumo el número actual al resultado.
        resultado += arr[i];
    }
    // INFO: Retorno el resultado.
    return resultado
}

console.log(sumarArreglo([5, 10, 12, 90, 3], 0, 1))