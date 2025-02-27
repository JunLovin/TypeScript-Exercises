"use strict";
// Escribir una función llamada bmi que reciba dos arugmentos: peso y altura, y retorne un string con las siguientes posibilidades:
// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30
const bmi = (peso, altura) => {
    const responseImc = peso / altura ** 2;
    if (responseImc < 18.5) {
        return "Bajo de peso";
    }
    else if (responseImc >= 18.5 && responseImc <= 24.9) {
        return "Normal";
    }
    else if (responseImc >= 25 && responseImc <= 29.9) {
        return "Sobrepeso";
    }
    else {
        return "Obeso";
    }
};
console.log(bmi(135, 1.7));
