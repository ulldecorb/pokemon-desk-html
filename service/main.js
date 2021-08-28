// const url = 'https://rickandmortyapi.com/api/character/';
// src="${data.image}" 

const url = 'https://pokeapi.co/api/v2/pokemon/' ;
const pokeBox = document.getElementById('pokemon-item');
let pokemonId = 25;
setPokemonBox(pokemonId);



async function getPokemon( pokemonId, listPosition ) {
    const resp = await fetch(`${ url }${ pokemonId }`);
    const data = await resp.json();
    document.getElementById(`pokemon-place__${ listPosition }`).innerHTML = 
    `
    <img class="pokemon-item__image" 
    src="${ data.sprites.front_default }" 
    alt="image of ${ data.name }">
    <h2 class="pokemon-item__name">
    ${`#${ pokemonId } ${ data.name }`}
    </h2>
    `;
};

function setPokemonBox(pokemonId) {
    let x = pokemonId;
    x < 1 && (x = 1);
    getPokemon(x, 1);
    getPokemon(x += 1, 2);
    getPokemon(x += 1, 3);
    getPokemon(x += 1, 4);
}

function backPagination() {
    pokemonId > 0 && (pokemonId -= 4);
    pokemonId <= 0 && (pokemonId = 1);
    resetpokemonList();
    setPokemonBox(pokemonId);
}

function forwardPagination() {
    pokemonId += 4;
    resetpokemonList();
    setPokemonBox(pokemonId);
}

function resetpokemonList() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`pokemon-place__${ i }`).innerHTML = '';
    }
}




