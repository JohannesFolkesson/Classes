class Pokemon {

    constructor(name, type, health) {
        this.name = name;
        this.type = type;
        this.health = health;

    }

    attack() {
        console.log(`${this.name} uses an attack!`)
    }

    takeDamage(amount) {
        this.health -= amount
        if(this.health < 0 ) this.health = 0;
        console.log(`${this.name} took ${amount} damage!`)
    }

    heal(amount) {
        this.health += amount;
        if(this.health > 100) this.health = 100;
        console.log(`${this.name} healed for ${amount} health`)
    }

    showStatus() {
        console.log(`${this.name} is a ${this.type}-Pokemon with ${this.health} HP.`)
    }



}


    const Gengar = new Pokemon("Gengar", "Ghost", 100)
    const Butterfree = new Pokemon("Butterfree", "Bug", 100)

    Gengar.attack(20)
    Butterfree.takeDamage(20)

    Butterfree.attack(50)
    Gengar.takeDamage(50)

    Butterfree.heal(10)
    Gengar.heal(25)

    Gengar.showStatus()
    Butterfree.showStatus()

