function sayMayName(name){
    console.log(name);
}

function verificarMarioridadeIdade(idade){
    if (idade >= 18){
        console.log("Voce é maior de idade!");
    }else{
        console.log("Você não é maior de idade!");
    }
}

(function main(){
    sayMayName("Gabriel");
    verificarMarioridadeIdade(18)
})()