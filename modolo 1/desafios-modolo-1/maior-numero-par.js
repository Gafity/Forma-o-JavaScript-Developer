const { get, print, input} = require("../Importacao-Exportacao/funcoes-auxiliares");

const conjuntoNumeros = input([5, 3, 4, 1, 10, 8]);

let numeroPar = 0;
let maiorValorPar = 0;

for (let index = 0; index < conjuntoNumeros.length; index++) {
    numeroPar = conjuntoNumeros[index];
    if (numeroPar % 2 === 0){
        if(numeroPar > maiorValorPar){
            maiorValorPar = numeroPar
        }
    }   
}

print(maiorValorPar)