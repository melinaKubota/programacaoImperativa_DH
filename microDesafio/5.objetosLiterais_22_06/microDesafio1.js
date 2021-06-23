/* Crie uma função construtora chamada Restaurante, 
que receba como parâmetros o nome do restaurante e o cardápio 
(que será um array de strings).*/

let restaurante = {
    nomeRestaurante: 'I Love Burger', 
    cardapio: ['Angus', 'Picanha', 'Vegetariano', 'Salmão.'],
    saudacao: 'Seja bem vindo, temos no cardapio de hoje: ',
    entrada: function() {return this.saudacao + this.cardapio.join(', ');}
};

/*função entrada() dentro do objeto, traz uma 
mensagem de boas-vindas, informando o nome do restaurante e o cardápio. */
console.log(restaurante.entrada());