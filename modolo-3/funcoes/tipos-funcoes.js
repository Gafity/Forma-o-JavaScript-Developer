// First Class Functions
// Higher Order Funtions

function falarOla(){
    console.log("Olá, seja bem vindo!")
}

const NOVAREFERENCIA = falarOla
NOVAREFERENCIA()

function recebeFunctions(functions){
    functions()
    console.log("Você está programando em Js")
}

recebeFunctions(falarOla)

const variavelFuntion = function(){
    
}