const url = 'https://pokeapi.co/api/v2/pokemon/' ;
// const url = 'https://rickandmortyapi.com/api/character/' ;
// src="${data.image}" 
let pokemonId = 25;
const pokeBox = document.getElementById('pokemon-item');
setPokemonBox(pokemonId);

async function pokemon(pokemonId) {
    const resp = await fetch(`${url}${pokemonId}`);
    const data = await resp.json();
    console.log(data);
    let pokeIndex = pokemonId
        const li = document.createElement("LI")
        li.innerHTML = 
        `
        <img class="pokemon-item__image" 
            src="${data.sprites.front_default}" 
            alt="image of ${data.name}">
        <h2 class="pokemon-item__name">
            ${data.name}
        </h2>
        `;
        li.setAttribute("class","pokemon-list");
        pokeBox.appendChild(li);
        pokeIndex += 1;
};

function setPokemonBox(pokemonId) {
    let x = pokemonId;
    x < 1 && (x = 1);
    pokemon(x);
    pokemon(x += 1);
    pokemon(x += 2);
    pokemon(x += 3);
}

function backPagination() {
    pokemonId -= 4;
    pokeBox.innerHTML = '';
    setPokemonBox(pokemonId);
}

function forwardPagination() {
    pokemonId += 4;
    pokeBox.innerHTML = '';
    setPokemonBox(pokemonId);
}




