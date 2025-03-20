const PESSOA = {
    renan: "renan",
    idade: 29
}

function falarNome(prefixo){
    console.log(prefixo, this.nome)
}

falarNome.apply(pessoa, ['Olá'])
falarNome.call(PESSOA, "Olá")