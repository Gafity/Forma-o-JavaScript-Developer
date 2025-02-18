//Crie um programa que dado um número imprima sua tabuada

const numero = 3;

for (let index = 0; index <= 10; index++) {
    let resultadoMultiplicacao = numero * index;
    
    if(index === 0){
        console.log(`Tabuada do ${numero}:`)
    }
    
    console.log(`${numero} x ${index} = ${resultadoMultiplicacao}`);
    
}