"use strict";
// Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:
// "fizz" si el número es múltiplo de 3
// "buzz" si el número es múltiplo de 5
// "fizzbuzz" si el n´umero es múltiplo tanto de 3 como de 5
// Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número
// INFO: Creo una función llamada fizzBuzz que tenga como parámetro un número
const fizzBuzz = (numero) => {
    // INFO: Si el número es múltiplo de 3 y de 5 que retorne "fizzbuzz"
    if (!(numero % 3) && !(numero % 5)) {
        return 'fizzbuzz';
        // INFO: Si el número es sólo múltiplo de 3 que retorne "fizz"
    }
    else if (!(numero % 3)) {
        return 'fizz';
        // INFO: Si el número es sólo múltiplo de 5 que retorne "buzz"
    }
    else if (!(numero % 5)) {
        return 'buzz';
        // INFO: Si no es ninguna de las anteriores que retorne el número en texto
    }
    else {
        return numero.toString();
    }
};
console.log(fizzBuzz(8));
