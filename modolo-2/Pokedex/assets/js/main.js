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


pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
}

)
    
    /*for (let index = 0; index < pokemons.length; index++) {
        const pokemon = pokemons[index];
        listItems.push(convertPokemonToLi(pokemon))
        
    }    */




const soma = 10 + 10
console.log(soma)
