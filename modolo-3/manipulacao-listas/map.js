class Pessoa{
    constructor(name){
        this.name = name
    }
}

const lista = [new Pessoa('Gabriel'), new Pessoa('Mark'), new Pessoa('Goku'), new Pessoa('Goju')];

const listaNome = lista.map((elements) => elements.name)

console.log(listaNome)