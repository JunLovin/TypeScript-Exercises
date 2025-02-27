// Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones. Si el número es menor a 1000 se debe devolver el mismo número como un string.

// INFO: Creo una función llamada acortadorDeLikes que tenga como parámetro un número de likes y devuelva un string
const acortadorDeLikes = (numeroDeLikes: number): string => {
    // INFO: Si el número de likes es menor a 0 que devuelva 0
    if (numeroDeLikes < 0) return '0';
    // INFO: Si el número de likes es menor a 1000 que devuelva el mismo número
    if (numeroDeLikes < 1000) return numeroDeLikes.toString();
    
    // INFO: Si el número de likes es menor a 1 millón
    if (numeroDeLikes < 1000000) {
        // INFO: Creo una variable que guarde el número de likes dividido para mil y que mantenga un decimal
        const miles = (numeroDeLikes / 1000).toFixed(1); // NOTE: Ejemplo 1500 -> "1.5K" -> 2300 -> "2.3K" (Al dividirlo por mil simplemente quito la cantidad de ceros que tenga mil contando de derecha hacia la izquierda y me devuelve 2, pero como estoy manteniendo el primer decimal queda "2.3K" y como no termina en .0 devuelvo el valor del decimal)
        // INFO: Si el número de likes dividido por mil termina en .0 devuelvo el número redondeado con K al final, sino devuelvo el número con el decimal y K al final 
        return miles.endsWith('.0') 
            ? `${Math.floor(numeroDeLikes / 1000)}K`
            : `${miles}K`;
    }
    
    // INFO: Creo una variable que guarde el número de likes dividido para un millón y que mantenga un decimal
    const millions = (numeroDeLikes / 1000000).toFixed(1); // NOTE: Ejemplo 2500000 -> "2.5M" -> 257392958 -> "257.4M" (Al dividirlo por un millón simplemente quito la cantidad de ceros que tenga el millón de derecha hacia la izquierda y me devuelve 257, como no termina en .0 devuelvo el primer decimal que me da)
    // INFO: Si el número de likes dividido por un millón termina en .0 devuelvo el número redondeado con M al final, sino devuelvo el número con un decimal y M al final
    return millions.endsWith('.0')
        ? `${Math.floor(numeroDeLikes / 1000000)}M`
        : `${millions}M`;
}

console.log(acortadorDeLikes(257392958))