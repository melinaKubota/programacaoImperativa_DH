// 1. Declarar uma variável chamada `myvar`, sem valor.
var myvar=" ";

// 2. Após declarada, atribua o valor 10 à variável `myvar`.
myvar="10";

// 3. Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma= 15 + 8;

// 4. Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma=soma++;

// 5. Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma=soma*3;

// 6. Qual é o valor da variável `soma` até aqui?
console.log(soma);

// 7. Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;

// 8. Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ['arroz', 'feijão', 'ovo'];

// 9. Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1]);

// 10. Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
/* for (var soma=myvar){

    return typeof soma
}; */

// 11. Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
/* myvar <= soma */

// 12. Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao (n1, n2){
    return n1/n2;
}   

// 13. Invoque a função criada acima, passando os parâmetros 10 e 2.
console.log(divisao(10,2));