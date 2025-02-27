// Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

// INFO: Defino una función llamada sumarArreglo que tenga como parámetro un array de números y retorne la suma de todos los números dentro del array
const sumarArreglo = (arreglo:number[]):number => {
    // INFO: Defino una variable llamada suma que va a ser igual a 0
    let suma:number = 0;
    // INFO: Recorro el array con un for y voy sumando cada número a la variable suma
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i]
    }
    // INFO: Retorno la variable suma
    return suma
}

console.log(sumarArreglo([5, 5]));