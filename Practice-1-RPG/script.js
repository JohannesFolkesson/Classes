class GameCharacter {
  constructor(name, health, power) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  attack(damage) {
    if (this.power > 0) {
      console.log(`${this.name} attacks and deals ${damage} damage!`);
      this.power -= 5;
    } else {
      console.log(`${this.name} is too tired to attack!`);
    }
  }

  takeDamage(amount) {
    this.health = Math.max(this.health - amount, 0);
    console.log(`${this.name} took ${amount} damage. Health: ${this.health}`);
  }

  heal(amount) {
    this.health += amount;
    console.log(`${this.name} healed ${amount} points. Health: ${this.health}`);
  }

  showStats() {
    console.log(`⚔️ ${this.name} — Health: ${this.health}, Power: ${this.power}`);
  }
}

const hero = new GameCharacter("Luna", 100, 50);
const villain = new GameCharacter("Drako", 120, 60);

hero.attack(20);
villain.takeDamage(20);
villain.attack(30);
hero.takeDamage(30);
hero.heal(10);

hero.showStats();
villain.showStats();
