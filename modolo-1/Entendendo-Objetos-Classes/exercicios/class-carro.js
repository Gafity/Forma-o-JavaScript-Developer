/* 
    1- Cire uma classe para representar carros.
    Os carros possuem uma marca, uma cor, e um gasto médio de combustivel por killometro rodado,
    Crie um metodo que dado a quantidade de quilometros eo preco do combustivel nos de o valor
*/

class Carro{
    marca;
    cor;
    LITROS_POR_KM;

    constructor(marca, cor, LITROS_POR_KM){
        this.marca = marca
        this.cor = cor 
        this.LITROS_POR_KM = LITROS_POR_KM
    }

    consumoMedioPorKilometro(kmPecorridos, precoCombustivel){
        let gastoMedio =  (kmPecorridos / this.LITROS_POR_KM) * precoCombustivel

        console.log(`O custo total da viagem é R$ ${gastoMedio.toFixed(2)}`);
    }

    informacaoCarro(){
        console.log(`Marca do carro : ${this.marca}, cor do carro: ${this.cor}, consumo por KM: ${this.LITROS_POR_KM}`)
    }
}

function main(){
    carroGol = new Carro("volkswagen", "branco", 9)
    carroGol.informacaoCarro()
    carroGol.consumoMedioPorKilometro(100, 4.33)
}

main()