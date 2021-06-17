let mostraNumero = a => ++a; //para mostrar o sucessor do numero que esta envocando, colocar o ++antes da variavel
console.log(mostraNumero(99));


//função sem argumento (arrow)
let bomDia = () => console.log("Bom dia");
//ou
let bomDia2 = _ => console.log("Bom dia");

bomDia();
bomDia2();
