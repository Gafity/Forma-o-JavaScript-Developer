const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce transforma uma lista em um unico valor
const SomaTodosNumeros = lista.reduce((previuos, current) => {
    return previuos + current
})

console.log(SomaTodosNumeros)