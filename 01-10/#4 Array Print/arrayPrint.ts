// Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea aparte:

const imprimirArreglo = (arr: any):void => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

const arregloInsano:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

type Personas = {
    nombre: string,
    edad: number,
    email: string,
}

const personas: Personas[] = [
    {
        nombre: "Juan",
        edad: 18,
        email: "juan@gmail.com"
    },
    {
        nombre: "Pedro",
        edad: 19,
        email: "pedro@gmail.com"
    }
]

imprimirArreglo(personas)