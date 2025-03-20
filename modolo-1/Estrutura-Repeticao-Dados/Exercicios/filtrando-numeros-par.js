// Crie um programa que se seja capaz de percores uma lista números e imprima cada 
// Numero par

const numeros = [3, 4, 16, 27, 28, 103, 1772];

for (let index = 0; index < numeros.length; index++) {
    let numeroLista = numeros[index]
    
    if ((numeroLista % 2) === 0){
        console.log(numeroLista)
    }
    
}