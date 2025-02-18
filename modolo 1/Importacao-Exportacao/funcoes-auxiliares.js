const entradas = [
    5, 
    50, 
    10, 
    98, 
    23
];

let i = 0

function get(){
    const valor = entradas[i];
    i++
    return valor;
}

function print(texto){
    console.log(texto);
}

function input(variavelInput){
   return variavelInput
}

module.exports = {get, print, input};