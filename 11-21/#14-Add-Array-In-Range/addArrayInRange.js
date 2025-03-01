"use strict";
// Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumarArreglo = void 0;
// NOTE: puedes asumir que la posición inciial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.
const sumarArreglo = (arr, posicionInicial, posicionFinal) => {
    let resultado = 0;
    for (let i = posicionInicial; i <= posicionFinal; i++) {
        resultado += arr[i];
    }
    return resultado;
};
exports.sumarArreglo = sumarArreglo;
console.log((0, exports.sumarArreglo)([5, 10, 12, 90, 3], 0, 1));
