// Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

// NOTE: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).

const distancia = (first:string, second:string):number => {
    // INFO: Inicializo el contador
    let counter:number = 0;

    // INFO: Gyardo el mínimo de las longitudes de los strings
    const minLength = Math.min(first.length, second.length)

    // INFO: Recorro los strings y comparo cada letra, si es diferente, aumento el contador por 1
    for (let i = 0; i < minLength; i++) {
        if (first[i] !== second[i]) {
            counter++
        }
    }

    // INFO: Sumo la diferencia de longitudes
    counter += Math.abs(first.length - second.length)

    // INFO: Retorno el contador
    return counter
}

console.log(distancia("hola", "hola"))
console.log(distancia("sdl", "tol"))
console.log(distancia("carro", "correr"))