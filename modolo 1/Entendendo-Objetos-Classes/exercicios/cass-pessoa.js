/* 
    2) Crie uma classse para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura,
    As pessoas devem ter a capacidade de dizer o valor de IMC (IMC = peso / (altura * altura))
    Instancia uma pessoa chamada Jose que tenha 70 kg e 1.73 de altura e peça ao José para dizer o valor o valor do seu seu IMC

*/

class Pessoa{
    nome;
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularIMC(){
        let imc = this.peso / (this.altura * this.altura)
        return imc.toFixed(2)
    }
}



function main(){
    const jose = new Pessoa("José", 70, 1.73)
    console.log(`O imc de ${jose.nome} é ${jose.calcularIMC()}`)
}

main()