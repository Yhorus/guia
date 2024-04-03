function factorial(n) {
    
    let factorialResultado = 1;

    
    for (let i = 1; i <= n; i++) {
        factorialResultado *= i;
    }

    return factorialResultado;
}

const numero = 3;
console.log("El factorial de", numero, "es:", factorial(numero));