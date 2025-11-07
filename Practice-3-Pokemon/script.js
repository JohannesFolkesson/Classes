// Pokémon-klass
class Pokemon {
  constructor(name, type, health = 100) {
    this.name = name;
    this.type = type;
    this.health = health;
  }

  attack(target) {
    // Slumpmässig skada mellan 5 och 30
    const damage = Math.floor(Math.random() * 25) + 5;
    target.takeDamage(damage);
    console.log(`${this.name} attacks ${target.name} for ${damage} damage!`);
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health < 0) this.health = 0;
    console.log(`${this.name} took ${amount} damage!`);
  }

  heal(amount) {
    this.health += amount;
    if (this.health > 100) this.health = 100;
    console.log(`${this.name} healed for ${amount} health.`);
  }

  showStatus() {
    console.log(`${this.name} is a ${this.type}-Pokemon with ${this.health} HP.`);
  }
}

// Test-Pokémon
const Gengar = new Pokemon("Gengar", "Ghost", 100);
const Butterfree = new Pokemon("Butterfree", "Bug", 100);

Gengar.attack(Butterfree);
Butterfree.attack(Gengar);
Butterfree.heal(10);
Gengar.heal(25);
Gengar.showStatus();
Butterfree.showStatus();

// DOM-element
const battleArena = document.querySelector('#battleArena');
const pokeName = document.querySelector('#pokeName');
const pokeType = document.querySelector('#pokeType');
const createBtn = document.querySelector('#createBtn');

let pokemons = [];

// Skapa Pokémon
createBtn.addEventListener('click', () => {
  const name = pokeName.value.trim();
  const type = pokeType.value.trim();

  if (!name || !type) {
    alert('Please enter both name and type!');
    return;
  }

  const newPokemon = new Pokemon(name, type);
  pokemons.push(newPokemon);
  renderPokemons();

  pokeName.value = "";
  pokeType.value = "";
});

// Visa alla Pokémon
function renderPokemons() {
  battleArena.innerHTML = "";

  pokemons.forEach((p, index) => {
    const card = document.createElement('div');
    card.className = "pokemon-card";

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>Type: ${p.type}</p>
      <p>Health: ${p.health}</p>
      <button onclick="attackPokemon(${index})">Attack</button>
      <button onclick="healPokemon(${index})">Heal</button>
    `;

    battleArena.appendChild(card);
  });
}

// Attack-knapp
window.attackPokemon = function(index) {
  if (pokemons.length < 2) {
    alert("You need at least 2 Pokémon to battle!");
    return;
  }

  const attacker = pokemons[index];
  const target = pokemons[(index + 1) % pokemons.length];

  attacker.attack(target);
  renderPokemons();
};

// Heal-knapp
window.healPokemon = function(index) {
  const amount = Math.floor(Math.random() * 20) + 5;
  pokemons[index].heal(amount);
  renderPokemons();
};

// Enkel loggfunktion
function log(message) {
  console.log(message);
}
