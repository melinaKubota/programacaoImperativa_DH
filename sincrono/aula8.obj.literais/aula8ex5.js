//desestruturando um objeto
let pessoa= {
    nomeCompleto: 'José Henrique dos Santos',
    sexo: 'm',
    cpf: '047.333.777-99',   
    nascimento: '16/08/1963',
    renda: 4000.00}
    
    let {nomeCompleto,renda}=pessoa; // para desestruturar
    let {nomeCompleto:nome,renda}=pessoa; // caso eu queira renomear --> nomeCompleto:nome
​
    console.log(nome);//José Henrique dos Santos
    console.log(renda);//4000.00 