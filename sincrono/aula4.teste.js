function podeSubir (altura , acompanhada){
    if (altura> 1.4 && altura<2){
        return true;
    }else if( altura < 1.4 && acompanhada == true){
        return true;
    }else(altura<1.2){
        return false;
    }
}
podeSubir(1,2,true);