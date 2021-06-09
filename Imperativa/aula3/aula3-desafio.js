

function calcularIndiceDeMassaCorporal(peso,altura){
    altura=altura/100;
    return (peso/Math.pow(altura,2)).toFixed(2);
    /* return peso/(altura*altura);
    return peso/atura**2; */
}

console.log('IMC = ' +calcularIndiceDeMassaCorporal(70,170));