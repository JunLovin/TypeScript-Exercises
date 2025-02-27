// Escribir una función llamada numeroDeCaracteres que reciba un string y un carácter (un string de un carácter). La función debe retornar el número de veces que aparece el caracter en el string

const numeroDeCaracteres = (texto:string, letra:string):number => {
    let numeroDeVecesQueSeRepiteLaLetra = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            numeroDeVecesQueSeRepiteLaLetra++
        }
    }
    return numeroDeVecesQueSeRepiteLaLetra
}

console.log(numeroDeCaracteres("MMMMM", "m"))