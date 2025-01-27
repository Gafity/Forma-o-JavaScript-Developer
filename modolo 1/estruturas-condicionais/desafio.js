// Faca um programa que calcule o preco de uma viagem
// Voce tera 3 variaveis, sendo elas:
// 1 - Preco da gasolina
// 2 - Preco do Etanol
// 3 - Gasto medio do combustivel por Km
// 4 - Distancia em Km de viagem
// 5 - tipo de combustivel que está no seu carro

let combustivelAtual = "Gasolina";
let precoGasolina = 6.14;
let precoEtanol = 4.13;
let kmPecorridos = 125;

if (combustivelAtual === "Gasolina"){
    let LitrosGasolinaPorKm = 14;
    let gastoMedio =  (kmPecorridos / LitrosGasolinaPorKm) * precoGasolina;
    console.log(`O gasto medio usando gasolina é: ${gastoMedio.toFixed(2)}`)
} else if (combustivelAtual === "Etanol"){
    let LitrosEtanolPorKm = 10
    let gastoMedio =  (kmPecorridos / LitrosEtanolPorKm) * precoEtanol;
    console.log(`O gasto medio usando etanol é: ${gastoMedio.toFixed(2)}`)
}