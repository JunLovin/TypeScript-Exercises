"use strict";
// Escribir una función contarRango que reciba dos números y retorne cuántos números hay entre ellos (excluyéndolos):
// NOTE: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.
// INFO: Creo una función llamada contarRango que tenga como parámetros dos números, la función cuenta el rango entre ambos números (Ej: 1, 9 = 7 (Excluyendo al 1 y al 9))
const contarRango = (n1, n2) => {
    // INFO: Iniciamos una variable que será el contador de los números
    let contador = 0;
    // INFO: Por cada número de diferencia aumentaremos el valor de contador a 1
    for (let i = n1 + 1; i < n2; i++) { // INFO: Se suma para pasar directamente al 2, si no estuviéramos sumando contaríamos así: 1, 2, 3, 4, 5, 6, 7, 8 pero nos piden excluir los números entonces tenemos que sumar 1 para que empiece: 2, 3, 4, 5, 6, 7, 8. De igual forma al poner menor que (<) en i < n2 nos aseguramos que no cuente al 9 ya que no puede llegar al 9, siempre tiene que ser un número más bajo, en este caso, 8. Si quisiéramos contar al 9 sería <=.
        contador++;
    }
    // INFO: Se retorna al contador
    return contador;
};
console.log(contarRango(1, 9));
