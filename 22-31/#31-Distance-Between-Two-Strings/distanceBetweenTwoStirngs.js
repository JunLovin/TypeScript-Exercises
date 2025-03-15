"use strict";
// Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).
// NOTE: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).
const distancia = (first, second) => {
    let palabrasEnArray = [first, second];
    let contador = 0;
    for (let i = 0; i < palabrasEnArray.length; i++) {
        for (let j = 0; j < palabrasEnArray[i].length; j++) {
            if (palabrasEnArray[i][j].length > palabrasEnArray[i][j].length) {
                contador++;
            }
            else if (palabrasEnArray[i][j] !== palabrasEnArray[i][j]) {
                contador++;
            }
        }
    }
    return contador;
};
console.log(distancia("hola", "hola"));
console.log(distancia("sdl", "tol"));
console.log(distancia("carro", "correr"));
