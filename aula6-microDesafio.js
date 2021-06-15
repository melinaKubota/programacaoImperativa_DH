const pontos =[12, 34, 56, 34, 5, 8, 76, 4, 1, 90];
console.log("1. Exibindo os elementos percorridos: " + pontos);

for (let i=0; i<pontos.length; i++){
    pontos[i]= pontos[i]*2  
    console.log(pontos[i]);
}

for (let i=0; i<pontos.length; i++){
    pontos[i]= pontos[i]+2  
    console.log(pontos[i]);
}
for (let i=0; i<pontos.length; i++){
    pontos[i]= pontos[i]/2  
    console.log(pontos[i]);
}

