// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra.

// INFO: Creo una función llamada capitalizar que reciba un texto como parámetro y retorne un string con la primera letra en mayúscula.
const capitalizar = (texto:string):string => {
    // INFO: Retorno el texto con la primera letra en mayúscula y el resto del texto en minúscula.
    return texto[0].toUpperCase() + texto.slice(1)
}

console.log(capitalizar('hola mundo'))