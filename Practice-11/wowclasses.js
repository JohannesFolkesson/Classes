import { Character } from "./character.js"


export class Mage extends Character {
    constructor(name) {
       super(name, "Mage", "Frost")
       this.specialAbility = "Frostbolt"

    }

    useSpell(target) {

            const min = 2
            const max = 8
            const multiplier = Math.floor(Math.random() * (max - min) + min);
            const damage = this.attack * multiplier;
            target.takeDamage(damage);

            return `${this.name}(${this.classType})(${this.Specialization})` + ` casts ${this.specialAbility} on ${target.name} for ${damage} damage! ${target.name} now has ${target.currentHP} health.`
    }
}

export class Priest extends Character {
    constructor(name) {
        super(name, "Priest", "Shadow");
        this.specialAbility = "Mind Blast";
    }
     useSpell(target) {
            const min = 1
            const max = 10
            const multiplier = Math.floor(Math.random() * (max - min) + min);
            const damage = this.attack * multiplier;
            target.takeDamage(damage);

            return `${this.name}(${this.classType})(${this.Specialization})` + ` casts ${this.specialAbility} on ${target.name} for ${damage} damage! ${target.name} now has ${target.currentHP} health.`
        }
}

export class Hunter extends Character {
    constructor(name) {
        super(name, "Hunter", "Marksmanship");
        this.specialAbility = "Chimera shot";
    }
    useSpell() {
          const min = 2
            const max = 6
            const multiplier = Math.floor(Math.random() * (max - min) + min);
            const damage = this.attack * multiplier;
            target.takeDamage(damage);

            return `${this.name}(${this.classType})(${this.Specialization})` + ` casts ${this.specialAbility} on ${target.name} for ${damage} damage! ${target.name} now has ${target.currentHP} health.`
    }
}

export class Shaman extends Character {
    constructor(name) {
        super(name, "Shaman", "Enhancement")
        this.specialAbility = "Stormstrike"
    }
    useSpell() {
            const min = 2
            const max = 5
            const multiplier = Math.floor(Math.random() * (max - min) + min);
            const damage = this.attack * multiplier;
            target.takeDamage(damage);

            return `${this.name}(${this.classType})(${this.Specialization})` + ` casts ${this.specialAbility} on ${target.name} for ${damage} damage! ${target.name} now has ${target.currentHP} health.`
    }
}