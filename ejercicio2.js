function EsPrimo(numero) {

    if (numero <= 1) {
        return false;
    }

    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }


    return true;
}


const num = 4;
console.log("¿Es", num, "primo?", EsPrimo(num));