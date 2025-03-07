// Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

/**
 * Las mayúsculas se reemplazan por minúsculas.
 * Se eliminan los espacios en blanco.
 * Reemplaza el caracter "a" por "4".
 * Reemplaza el caracter "e" por "3".
 * Reemplaza el caracter "i" por "1".
 * Reemplaza el caracter "o" por "0".
 */

// INFO: Creo una función llamada isUpperCase para comprobar más adelante si la letra es mayúscula o no
const isUpperCase = (str:string):boolean => str === str.toUpperCase()

// INFO: Creo una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:
const password = (str:string):string => {
    // INFO: Si el string está vacío, retorno el string.
    if (!str) return str
    // INFO: Separo el string en un array de letras.
    const text:string[] = str.split('')
    // INFO: Itero el array de letras
    for (let i = 0; i < text.length; i++) {
        // INFO: Si es un espacio en blanco, la elimino.
        if (text[i] === " ") {
            text[i] = ""
            // INFO: Si la letra es mayúscula, la convierto en minúscula.
        } else if (isUpperCase(text[i])){
            text[i] = text[i].toLowerCase()
            // INFO: Si la letra es "a", "e", "i" o "o", la reemplazo por el número correspondiente.
        } else if (text[i] === 'a') {
            text[i] = "4"
        } else if (text[i] === 'e') {
            text[i] = "3"
        } else if (text[i] === 'i') {
            text[i] = '1'
        } else if (text[i] === 'o') {
            text[i] = '0'
        } 
    }
    // INFO: Converto el array en string y lo retorno con los cambios realizados.
    return text.join("")
}

console.log(password('Esta Es Una Prueba'))