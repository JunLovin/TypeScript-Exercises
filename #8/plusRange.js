"use strict";
// Escribir una función llamada sumarRango que reciba dos argumentos: número inciial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos)
// NOTE: Puedes asumir que el número inicial va a ser menor o igual que el número final
// INFO: Creo una función llamada sumarRango que tenga como parámetros dos números, el incial y el final
const sumarRango = (n1, n2) => {
    // INFO: Defino la variable en donde guardaré el resultado de la suma de los rangos
    let contador = 0;
    // INFO: Por cada número de diferencia entre el número 1 y el número 2 se sumará el número actual y se repetirá hasta que el número 1 sea igual al número 2
    for (let i = n1; i <= n2; i++) {
        contador += i;
    }
    // INFO: Se retorna el contador (la suma del rango entre el n1 y el n2)
    return contador;
};
console.log(sumarRango(12, 14));
