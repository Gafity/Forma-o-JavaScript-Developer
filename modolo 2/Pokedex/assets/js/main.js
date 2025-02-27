const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}limit=${limit}`

function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

// O then retorna a resposta
    //console.log(response)
// Fator importante pode haver mais de um then, o tem posterior a ao segundo then, recebe 
// a resposta de seu antecessor 
// O fetch ele retorna uma promise, que é muito importante para lidar com a assicronismo
fetch(url).then((response) => response.json())
// Exemplo de uma arrow function
    .then((jsonBody) => jsonBody.results) //debugger faz com que arquivo já seja aberto no site
    .then((pokemons) => {
        for (let index = 0; index < pokemons.length; index++) {
            const pokemon = pokemons[index];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
            
        }
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisicao concluida'))

const soma = 10 + 10
console.log(soma)
