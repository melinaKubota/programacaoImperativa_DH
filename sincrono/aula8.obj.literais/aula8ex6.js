let frutasVermelhas=['Morango','Cereja','Melancia'];
let frutasAmarelas=['Melão','Damasco','Pêssego'];
let frutasVerdes=['Limão','Abacate'];
​
// ... spread operator - operador de propagação, de espalhamento com arrays --> atalho para juntas vetores
let frutas=[...frutasVermelhas,...frutasAmarelas,...frutasVerdes];
​
console.log(frutas);//['Morango','Cereja','Melancia','Melão','Damasco','Pêssego''Limão','Abacate']
let frutas1=[frutasVermelhas,frutasAmarelas,frutasVerdes];

console.log(frutas1); 
/* [
    ['Morango','Cereja','Melancia']
    ['Melão','Damasco','Pêssego']
    ['Limão','Abacate']
] */