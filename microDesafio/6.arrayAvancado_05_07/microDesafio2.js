/*2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses 
dois índices com o nome Maria. */
let nomes = ['Maria', 'João', 'Maria'];
 let maria = nomes.filter(function(nomes){
    return nomes=='Maria'
}); 
console.log(maria);
//ou 
/* let maria = nomes.filter(nomes => nomes=='Maria') 
console.log(maria); */