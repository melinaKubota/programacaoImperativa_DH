let fruta=['banana', 'melao'];
fruta.push('abacaxi', 'cereja'); 
console.log(fruta);
console.log(fruta[2]);

//romeve a cerreja(ultimo)
/* fruta.pop();
console.log(fruta); */
//^^^^^^^^^^^^^^^^
console.log(fruta.pop());
let frutaRemovida=fruta.pop();
console.log(frutaRemovida);
//

//remove a babana (primeiro)
console.log(fruta.shift());