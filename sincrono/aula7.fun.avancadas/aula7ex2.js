// quando um unico arrgumento nao colocar ()
let mostraNumero = a => ++a; //para mostrar o sucessor do numero que esta envocando, colocar o ++antes da variavel
console.log(mostraNumero(99));
//ou let mostraNumero = a => a+1;


//função sem argumento (arrow)
let bomDia = () => console.log("Bom dia");
//ou
let bomDia2 = _ => console.log("Bom dia");

bomDia();
bomDia2();
