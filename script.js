const pokemons = [
  {
    name: "Pikachu",
    type: "Elétrico",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    abilities: [
      { name: "Static", power: 60 },
      { name: "Lightning Rod", power: 70 }
    ]
  },
  {
    name: "Charizard",
    type: "Fogo / Voador",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    abilities: [
      { name: "Blaze", power: 80 },
      { name: "Solar Power", power: 90 }
    ]
  },
  {
    name: "Bulbasaur",
    type: "Planta / Veneno",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    abilities: [
      { name: "Overgrow", power: 65 },
      { name: "Chlorophyll", power: 60 }
    ]
  },
  {
    name: "Squirtle",
    type: "Água",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    abilities: [
      { name: "Torrent", power: 60 },
      { name: "Rain Dish", power: 55 }
    ]
  },
  {
    name: "Gengar",
    type: "Fantasma / Veneno",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    abilities: [
      { name: "Cursed Body", power: 80 }
    ]
  },
  {
    name: "Eevee",
    type: "Normal",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    abilities: [
      { name: "Run Away", power: 50 },
      { name: "Adaptability", power: 60 }
    ]
  },
  {
    name: "Lucario",
    type: "Lutador / Aço",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    abilities: [
      { name: "Steadfast", power: 75 },
      { name: "Inner Focus", power: 70 }
    ]
  },
  {
    name: "Snorlax",
    type: "Normal",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    abilities: [
      { name: "Immunity", power: 85 },
      { name: "Thick Fat", power: 90 }
    ]
  },
  {
    name: "Greninja",
    type: "Água / Sombrio",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
    abilities: [
      { name: "Torrent", power: 70 },
      { name: "Protean", power: 95 }
    ]
  },
  {
    name: "Jigglypuff",
    type: "Normal / Fada",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    abilities: [
      { name: "Cute Charm", power: 50 },
      { name: "Competitive", power: 60 }
    ]
  }
];

let currentIndex = 0;

function displayPokemon(index) {
  const card = document.querySelector('.card');
  card.classList.remove('show');
  
  setTimeout(() => {
    const pokemon = pokemons[index];
    document.getElementById("pokemon-img").src = pokemon.img;
    document.getElementById("pokemon-name").textContent = pokemon.name;

    const typeContainer = document.getElementById("pokemon-type");
    const types = pokemon.type.split(" / ");
    typeContainer.innerHTML = 'Tipo: ' + types.map(type => {
      const typeClass = type.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return `<span class="badge ${typeClass}">${type}</span>`;
    }).join(' / ');

    const abilitiesList = document.getElementById("pokemon-abilities");
    abilitiesList.innerHTML = "";
    pokemon.abilities.forEach(ability => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="label">${ability.name}</span>
        <div class="bar">
          <div class="fill" style="width: ${ability.power}%"></div>
        </div>
      `;
      abilitiesList.appendChild(li);
    });

    card.classList.add('show');
  }, 200); // espera um pouquinho antes de mostrar o próximo
}

function prevPokemon() {
  currentIndex = (currentIndex - 1 + pokemons.length) % pokemons.length;
  displayPokemon(currentIndex);
}

function nextPokemon() {
  currentIndex = (currentIndex + 1) % pokemons.length;
  displayPokemon(currentIndex);
}

window.onload = () => {
  displayPokemon(currentIndex);
};

document.getElementById('start-button').addEventListener('click', () => {
  const intro = document.getElementById('intro');
  intro.style.opacity = '0';
  intro.style.visibility = 'hidden';
  displayPokemon(currentIndex);
});
