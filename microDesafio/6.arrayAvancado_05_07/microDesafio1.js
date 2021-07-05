/* 1.Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números 
ímpares. */

let pares = [2, 4, 6];
let impar = pares.map(function(num){
    return num+1;
}); 
console.log(impar);//[3, 5, 7,]