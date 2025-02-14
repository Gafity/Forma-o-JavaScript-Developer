class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome; 
        this.idade = idade;
    }

    descrever(){
        console.log(`Nome: ${this.nome}, idade: ${this.idade}`);
    }
}

gabriel = new Pessoa("Gabriel", 22);
console.log(gabriel);

lucas = new Pessoa("Lucas", 20);

function compararIdade(pessoa1, pessoa2){
    if (pessoa1.idade > pessoa2.idade){
        console.log(`${pessoa1.nome} é mais velho que ${pessoa2.nome}`)
    } else if (pessoa1.idade < pessoa2.idade){
        console.log(`${pessoa2.nome} é mais velho que ${pessoa1.nome}`)
    }else{
        console.log("Os dois tem a mesma idade")
    }
}

(function main(){
    compararIdade(gabriel, lucas)
})()