/* 3. Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do 
curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes 
(um array composto pelos alunos criados no passo 1) */

function Curso (nomeDoCurso, notaDeAprovacao, faltasMaximas, estudantes){
    this.nomeDoCurso = nomeDoCurso;
    this.notaDeAprovacao = notaDeAprovacao;
    this.faltasMaximas = faltasMaximas;
    this.estudantes = estudantes;

    /* this.novoAluno=(i)=> this.estudantes.push(i) */
    this.novoAluno=()=> this.estudantes.splice('aluno4');
}

let programacao
programacao = new Curso('Programação', 8 ,3, ['aluno1', 'aluno2']);

programacao.novoAluno()
console.log(programacao.novoAluno())

/* 4. Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos 
nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de 
estudantes do objeto curso. */
/* 5. Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true 
se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que 
ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se 
tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.*/

/*  6. Crie um método para o objeto curso que percorra a lista de estudantes e retorne um 
array de booleanos com os resultados se os alunos aprovaram ou não.*/

/* 7.  Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que 
contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).*/
