/* 1.Crie uma variavel produtos, que contenha um array de objetos, com no minimo 3 itens. 
Dentro da variavel, liste produtos disponiveis, informando os seguintes detalhes: Nome do produto, 
valor do produto, qualidade do produto e status 
A informação qualidade do produto deve ser um numero que ira de 0 a 10.
A informação Status deve ser um Booleano, indicando se o produto esta disponivel em estoque */

function Aluno (nome, faltas, notas){
    this.nome=nome
    this.faltas=faltas
    this.notas=notas
}

modulo.exports = Aluno


/* 2. Em seguida, um usuario deseja filtrar os produtos, com base  em alguns criterios. Selecione 
todos os produtos que tenham: 
 valor entre 482 e 1600
qualidade superior a 60
status como disponivel
o resultado do filtro deve ser armazenado na variavel carrinho */

/* 3. Por fim,  é necessario exibir todos os itens presentes no 
carrinho, com seus nomes e preço correspondentes, e no final um 
valor total, resultante da somatoria de todos os produtos. */