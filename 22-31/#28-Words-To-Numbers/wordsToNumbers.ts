// Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo arreglo tarduciendo cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número, traducir a -1.

// INFO: Creo una función que reciba un arreglo de strings y retorne un nuevo arreglo convirtiendo cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número, traducir a -1.
const palabrasANUmeros = (numeros:string[]):number[] => {
    // INFO: Inicializo el array que contendrá los números
    const nums:number[] = []
    // INFO: Recorro el array de strings
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === 'Cero') {
            nums.push(0)
        } else if (numeros[i] === 'Uno') {
            nums.push(1)
        } else if (numeros[i] === 'Dos') {
            nums.push(2)
        } else if (numeros[i] === 'Tres') {
            nums.push(3)
        } else if (numeros[i] === 'Cuatro') {
            nums.push(4)
        } else if (numeros[i] === 'Cinco') {
            nums.push(5)
        } else if (numeros[i] === 'Seis') {
            nums.push(6)
        } else if (numeros[i] === 'Siete') {
            nums.push(7)
        } else if (numeros[i] === 'Ocho') {
            nums.push(8)
        } else if (numeros[i] === 'Nueve') {
            nums.push(9)
        } else {
            nums.push(-1)
        }
    }
    return nums;
}

console.log(palabrasANUmeros(["Cero", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "What?"]))