// Escribir una función llamada "CopntrasenaValida" que reciba un string y retorne true si es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false

const contrasenaValida = (password:string):boolean => {
    if (password === "2Fj(jjbFsuj" || password === "eoZiugBf&g9") {
        return true
    } else {
        return false
    }
}

console.log(contrasenaValida("2Fj(jjbFsuj"))