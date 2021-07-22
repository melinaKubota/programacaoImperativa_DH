function podeSubir(alturaM, acompanhada){
    if (alturaM >= 1.4 &&  <= 2.0){
        console.log('Acesso autorizado'); 
        return true;
    }else if (alturaM >= 1.2 && alturaM<1.4 && acompanhada == true){
        console.log('Acesso autorizado somente');
    }else{
        console.log("acesso negado");
        return false;
    }
}
podeSubir(1,2,true);