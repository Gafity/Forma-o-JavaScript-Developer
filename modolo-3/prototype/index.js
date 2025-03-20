const pessoa = {genero: "masculino"}

const renan = {
    nome: "renan",
    idade: 30,
    __proto__: pessoa // aqui está dizendo que o obj renam está erdando o obj pessoa
}

console.log(renan)
console.log(renan.genero)

function Pessoa(nome, idade){ //funcao com letra maiusca ponta que é uma fun construtora
    this.nome = nome
    this.idade = idade
}

// .prototype serve para alterar o prototipo 
Pessoa.prototype.falar = function (){
    console.log(`Meu nome é ${this.nome}`)
}

const gabriel = new Pessoa("Gabriel", 22)
console.log(gabriel)
gabriel.falar()

// equivalencia

class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const will = {
    genero: "maculino"
}

Pessoa.call(will, 'will', 24);