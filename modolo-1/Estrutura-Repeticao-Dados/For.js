const nota = [5, 8, 10, 6];

const nome = "Gabriel Gama";

for (index = 0; index < nome.length; index++){
    console.log(nome[index]);
}

let somaTotalNotas = 0

for (let index = 0; index < nota.length; index++) {  
    const notaFor = nota[index]
    somaTotalNotas = somaTotalNotas + notaFor;
}

const media = somaTotalNotas / nota.length
console.log(media)