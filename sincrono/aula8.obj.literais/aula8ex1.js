//aula8 - objetos literais
//objeto = objetos do mundo real que eu abstraio para o JS; tem propriedade e metodo
//metodo = é uma função que esta dentro de um objeto, posso chamar o metodo de função
//objeto = observação do mundo real 
    //características / ações
//carro - cor, placa, largura, altura, movimentar(ação - métodos),
//ano, modelo
//quando trabalho com objeto utilizo chaves
//elemento da esqueda caracteristica(propriedade):elemento da dir valor da propriedade
let carro={ 
    cor: 'preta', //cor=propriedade o caract preta=valor da propr
    placa: 'DRU2258',
    largura: 2,
    altura: 1.5,
    flex: true,
    movimentar: function() {
        return 'O carro está andando!';
    }
}
console.log(carro);
console.log(carro.cor);
console.log(carro.movimentar()); //por ser um metodo precisa por o par de parenteses