const {get, print} = require("../funcoes-auxiliares");

/* 
    Uma sala contém 5 alunos e para cada aluno foi sorteado um numero de 1-100
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    dados de entrada 
    5
    50 
    10
    98
    23

*/

const numeroSorteados = [];
for (let index = 0; index < 5; index++) {
    const numeroSorteado = get()
    numeroSorteados.push(numeroSorteado)
}

let maiorValor = 0;

for (let index = 0; index < numeroSorteados.length; index++) {
    const numeroSorteado = numeroSorteados[index];
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado
    }
}

print(maiorValor);

// Forma simplificada 
let maiorValorEncontrado = 0

for (let index = 0; index < numeroSorteados.length; index++) {
    const numeroSorteado = numeroSorteados[index];
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado
    }
    
}

print(maiorValorEncontrado)