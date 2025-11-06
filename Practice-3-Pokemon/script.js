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

    



}