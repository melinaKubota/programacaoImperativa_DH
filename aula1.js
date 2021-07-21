/* 1. Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.*/

/* 2. Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.*/

/*  */

function Aluno (nome, notas){
    this.nome=nome
    this.faltas=0
    this.notas=notas

/* 2. Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.*/
    this.calcularMedia=()=>(this.notas.reduce((n1, n2) => n1 + n2)/this.notas.length)
    this.calcularFaltas=()=>this.faltas++;
}

module.exports = Aluno;
