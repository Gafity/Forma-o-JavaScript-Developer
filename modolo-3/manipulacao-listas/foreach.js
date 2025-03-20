const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach é mais lento que o for tradicional
lista.forEach((value, i, listRef) => {
    console.log(value);
    console.log(listRef)
    console.log(i)
})