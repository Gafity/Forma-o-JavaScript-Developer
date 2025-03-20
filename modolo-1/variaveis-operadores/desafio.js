// Faca um programa que calcule o preco de uma viagem
// Voce tera 3 variaveis, sendo elas:
// 1 - Preco do combustivel
// 2 - Gasto medio do combustivel por Km
// 3 - Distancia em Km de viagem

let precoCombustivel = 6.32
let litrosPorKm = 14
let kmPecorridos = 125
let gastoMedio =  (kmPecorridos / litrosPorKm) * precoCombustivel

console.log(`O custo total da viagem é R$ ${gastoMedio.toFixed(2)}`);
