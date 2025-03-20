const pokeApi = {}

pekoApi.getPokemonDetail = (pokemon) => {
    fetch(pokemon.url)
    .then((response) => response.json())
}


pokeApi.getPokemons =(offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}limit=${limit}`
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons => pokemons.map((getPokemonDetail))))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => {
        debugger
        console.log(pokemonsDetails)
    })
    .catch((error) => console.error(error))
}