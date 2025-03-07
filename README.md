# Ejercicios de TypeScript

Ejercicios básicos de **[TypeScript](https://www.typescriptlang.org/)** para aprender los conceptos.

> _Todos los ejercicios son de **[este repositorio](https://github.com/makeitrealcamp/ejercicios-javascript)**._
> _Los ejercicios son de **JavaScript**, pero yo los estoy haciendo en **[TypeScript](https://www.typescriptlang.org/)**._

## Índice de Ejercicios

### 1. [Contraseña Válida](./01-10/#1-Valid-Password/)
Crear una función que reciba un string y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar `false`

### 2. [Calcular Impuestos](./01-10/#2-Calculate-Taxes/)
Crear una función que reciba dos argumentos: `edad` e `ingresos`. Si la persona es mayor de 18 años y tiene ingresos iguales o superiores a 1000 debe retornar `ingresos` * 40%. De lo contrario debe retornar 0

### 3. [IMC](./01-10/#3-BMI/)
Crear una función que reciba dos argumentos: `peso` y `altura`. La función debe retornar una de las siguientes posibilidades:

* Si el IMC es menor a 18.5 debe retornar "Bajo peso"
* Si el IMC está entre 18.5 y 24.9 debe retornar "Normal"
* Si el IMC está entre 25 y 29.9 debe retornar "Sobrepeso"
* Si el IMC es mayor a 30 debe retornar "Obeso"

### 4. [Imprimir un Array](./01-10/#4-Array-Print/)
Crear una función que reciba un `arreglo` e imprima cada uno de sus elementos en una línea aparte.

### 5. [Número de Likes](./01-10/#5-Likes-Number/)
Crear una función que reciba un `número` y retorne un `string` utilizando el formato K para miles y M para millones.

Por ejemplo: 

* 1000 -> 1K
* 23000 -> 23K
* 234000 -> 234K
* 1000000 -> 1M
* 2340000 -> 2.3M

### 6. [FizzBuzz](./01-10/#6-FizzBuzz/)
Crear una función que reciba un `número` y retorne un `string` de acuerdo a lo siguiente:

* Si el número es múltiplo de 3 debe retornar "Fizz"
* Si el número es múltiplo de 5 debe retornar "Buzz"
* Si el número es múltiplo de 3 y 5 debe retornar "FizzBuzz"
* De lo contrario debe retornar el número

### 7. [Contar un Array de Números](./01-10/#7-Count-Array-of-Numbers/)
Crear una función que reciba dos `números` y retorne cuántos números hay entre ellos, excluyéndolos.

**NOTE:** Se debe utilizar un ciclo. Se puede asumir que el primer valor será menor que el segundo.

### 8. [Sumar Rango de Números](./01-10/#8%20Add-Number-Range/)
Crear una función que reciba dos argumentos: `número incial` y `número final`. La función debe retornar la suma de todos los números entre ellos, incluidos.

**NOTE:** Se puede asumir que el primer valor será menor o igual que el segundo.

### 9. [Número de aes (letra "a")](./01-10/#9%20Number-of-a/)
Crear una función que reciba un `string` y retorne cuántas veces aparece la letra "a".

### 10. [Número de Carácteres](./01-10/#10-Characters-Number/)
Crear una función que reciba un `string` y un `carácter` y retorne cuántas veces aparece el carácter en el string.

### 11. [Sumar Arreglo](./11-21/#11-Array-Add/arrayAdd.ts)
Escribir una función que reciba un `arreglo` de números y retorne la suma de todos los elementos.

### 12. [Multiplicar Arreglo](./11-21/#12-Multiply-Array/multiplyArray.ts)
Crear una función que reciba un `arreglo` de números y retorne la multiplicación de todos los elementos.

### 13. [Remover Ceros](./11-21/#13-Zero-Remove/zeroRemove.ts)
Crear una función que reciba un `arreglo` de números y retorne un nuevo arreglo excluyendo los ceros (0)

### 14. [Sumar Arreglo Entre el Rango](./11-21/#14-Add-Array-In-Range/addArrayInRange.ts)
Crear una función que reciba un `arreglo` de números y dos `números` (inicio y fin). La función debe retornar la suma de todos los elementos entre el rango de los índices.

### 15. [Transcribir ADN a ARN](./11-21/#15-ADN-to-ARN/adnToArn.ts)
Crear una función que reciba un `string` (una cadena de ADN) y retorne otro `string`, la cadena de ARN correspondiente.

Los complementos son los siguientes:

- G -> C
- C -> G
- T -> A
- A -> 

### 16. [Capitalizar Palabra](./11-21/#16-Capitalize-Word/capitelizeWorld.ts)
Escribir una función que reciba un `string` como parámetro y capitalice la primera letra

### 17. [Capitalizar Cada Palabra](./11-21/#17-Capitalize-Each-Word/capitalizeEachWord.ts)
Escribir una función que reciba un `string` y capitalice la primera letra de **cada palabra**

### 18. [Encontrar el número máximo](./11-21/#18-Find-Max-Number/findMaxNumber.ts)
Escribir una función que reciba un `array` de números y retorne el número máximo:

**Nota:** Intentarlo hacer sin el método `Math.max` de JavaScript.

### 19. [Encontrar el número mínimo](./11-21/#19-Find-Min-Number/findMinNumber.ts)
Escribir una función que reciba un `array` de números y retorne el número mínimo:

**Nota:** Intentarlo hacer sin el método `Math.min` de JavaScript.

### 21. [Generar Contraseña](./11-21/#20-Gen-Pass/genPass.ts)
Escribir una función que reciba un `string` y retorne un nuevo `string` realizando los siguientes cambios:

- Las mayúsculas se reemplazan por minúsculas.
- Se eliminan los espacios en blanco.
- Reemplaza el caracter "a" por "4".
- Reemplaza el caracter "e" por "3".
- Reemplaza el caracter "i" por "1".
- Reemplaza el caracter "o" por "0".