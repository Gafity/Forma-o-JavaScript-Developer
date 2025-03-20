/* 
Em resumo dois iguais ira realizar um conversão de tipo ao comparar duas coisas (==);
três iguais ira fazer a mesma comparação, sem a conversão (===)
*/

let dubleEgual = 10 == "10" // False
let tripleEgual = 10 === "10" // True

console.log(dubleEgual)
console.log(tripleEgual)

/* Recomendace sempre usar (===) */