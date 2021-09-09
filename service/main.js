// const url = 'https://rickandmortyapi.com/api/character/';
// src="${data.image}" 

const url = 'https://pokeapi.co/api/v2/pokemon/' ;
// const pokeBox = document.getElementById('pokemon-item');
let pokemonId = 25;
let pokemonDetailId = 25;
let totalPokemons = 898;
setPokemonBox(pokemonId);


getTotalPokemon();
async function getTotalPokemon() {
    const resp = await fetch(`${ url }`);
    const data = await resp.json();
    totalPokemons = data;
    console.log('pikachu-atributes: ' , JSON.stringify(data));
    console.log('total pokemon: ' , Object.keys(data));
};

async function getPokemon( pokemonId, listPosition ) {
    const resp = await fetch(`${ url }${ pokemonId }`);
    const data = await resp.json();
    document.getElementById(`pokemon-place__${ listPosition }`).innerHTML = 
    `
    <button type="button" class="list__button" onclick="getPokemonDetail(${pokemonId})">
        <img class="list__image" 
            src="${ data.sprites.other.dream_world.front_default }" 
            alt="image of ${ data.name }">
        <h2 class="list__name">
            ${`#${ pokemonId }<br>${ data.name }`}
        </h2>
    </button>
    `;
};

function setPokemonBox(pokemonId) {
    let x = pokemonId;
    getPokemon(x, 1);
    getPokemon(x += 1, 2);
    getPokemon(x += 1, 3);
    getPokemon(x += 1, 4);
}

function backPagination() {
    pokemonId > 0 && (pokemonId -= 4);
    pokemonId <= 0 && (pokemonId = 895);
    resetpokemonList();
    setPokemonBox(pokemonId);
}

function forwardPagination() {
    pokemonId < 896 && (pokemonId += 4);
    pokemonId >= 896 && (pokemonId = 1);
    resetpokemonList();
    setPokemonBox(pokemonId);
}

function resetpokemonList() {
    for (let i = 1; i < 5; i++) {
        document.getElementById( `pokemon-place__${ i }` ).innerHTML = '';
    }
}

async function getPokemonDetail (id) {
    const resp = await fetch(`${ url }${ id }`);
    const data = await resp.json();
    const detailElement = document.createElement( "SECTION" );
    detailElement.setAttribute("class", 'detail' );
    detailElement.setAttribute("id", 'pokemon-detail' );
    detailElement.innerHTML = `
    
    <section class="detail__box">
        <div class="detail__info">
            <h2 class="info__name">#${data.id}-${data.name.toUpperCase()}</h2>
            <h3 class="info__types">
                TYPE: ${data.types.map((item) => item.type.name).join("<br>")}
            </h3>
            <h3 class="info__abilities">
                ABILITIES: ${data.abilities.map((item) => item.ability.name).join("<br>")}
            </h3>
            <h3>
                HEIGHT: ${data.height /= 10}m
            </h3>
            <h3>
                WEIGHT: ${data.weight}kg
            </h3>
        </div>
        <div class="detail__sprites">
            <div class="sprites__artwork">
                <img class="artwork__image" 
                src="${ data.sprites.other["official-artwork"].front_default }" 
                alt="pixel image of ${ data.name }">
            </div>
            <div class="sprites__versions"> 
                <img class="versions__image"
                    src="${ data.sprites.versions["generation-iii"].emerald.front_default }" 
                    alt="pixel image of ${ data.name }">
                <img class="versions__image" 
                    src="${ data.sprites.versions["generation-iv"]["diamond-pearl"].front_default }" 
                    alt="pixel image of ${ data.name }">
                <img class="versions__image" 
                    src="${ data.sprites.versions["generation-v"]["black-white"].animated.front_shiny }" 
                    alt="pixel image of ${ data.name }">
            </div>
        </div>
    </section>
    `;
    detailElement.addEventListener("click", () => removeDetail());
    document.getElementsByClassName("gallery")[0].insertAdjacentElement( "afterend", detailElement );
} 

function removeDetail () {
    document.body.removeChild(document.getElementById("pokemon-detail"));
}

// function setIndex(index) {
//     pokemonId = Number.parseInt(index,10);
//     setPokemonBox(pokemonId);
// }

function setPokemonByInput(stringId) {
    pokemonId = Number.parseInt(stringId,10);
    setPokemonBox(pokemonId);
}

// function setPokemonByInput (stringId) {
//     let numId = Number.parseInt( stringId , 10)
//     setIndex(numId);
// }