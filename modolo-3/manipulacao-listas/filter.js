const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter cria uma nova lista
const Pares = lista.filter((element) => {
    return (element % 2 === 0)
})

console.log(Pares)