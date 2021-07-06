/* 3.Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7” */
/* let numero = [1, 5, 9, 3, 7];
let formatado = numero.reduce(
    function(numero){
        return numero + '-' + numero 
    }
); 

console.log(formatado);  */
let numero = [1, 5, 9, 3, 7];
console.log(numero.reduce((acumulador, atual)=>acumulador + '-' + atual));