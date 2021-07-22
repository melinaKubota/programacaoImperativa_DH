//callback == função é passada como parametro para outra função

let funcao=_=> console.log('Ola mundo'); 

//esta função sera usada como parametro para outra função 
//setTimeout - função de tempo ele da em millisegundos 1seg=1000 millisegundos
setTimeout(funcao, 5000); //executara a função em 5s
setInterval(funcao, 5000);//vai repetir a função a cada 5s

    