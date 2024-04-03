function sumaDigitos(numero) {
    
    let suma = 0;

    const numeroStr = numero.toString();

    for (let i = 0; i < numeroStr.length; i++) {
        const digito = parseInt(numeroStr[i]);
        suma += digito;
    }

    return suma;       
}

// Ejemplo de uso:
const numero = 22;
console.log("La suma de los dígitos de", numero, "es:", sumaDigitos(numero));
