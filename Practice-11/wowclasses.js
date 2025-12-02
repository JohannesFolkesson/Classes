import { Character } from "./character.js"


export class Mage extends Character {
    constructor(name) {
       super(name, "Mage", "Frost")
       this.specialAbility = "Frostbolt"

    }

    useSpell(target) {

        const damage = this.attack * 2;
        target.takeDamage(damage);
        // return `${this.name} (${this.classType})(${this.Specialization}) casts ${this.specialAbility}!`
        return `${this.name} (${this.classType})(${this.Specialization}) `
         + `casts ${this.specialAbility} on ${target.name} for ${damage} damage!`
    }
}

export class Priest extends Character {
    constructor(name) {
        super(name, "Priest", "Shadow");
        this.specialAbility = "Mind Blast";

       
    }
     useSpell() {
            return `${this.name} (${this.classType})(${this.Specialization}) casts ${this.specialAbility}!`;
        }
}

export class Hunter extends Character {
    constructor(name) {
        super(name, "Hunter", "Marksmanship");
        this.specialAbility = "Chimera shot";
    }

    useSpell() {
        return `${this.name} (${this.classType})(${this.Specialization}) fires away ${this.specialAbility}!`
    }
}

export class Shaman extends Character {
    constructor(name) {
        super(name, "Shaman", "Enhancement")
        this.specialAbility = "Stormstrike"
    }
    useSpell() {
        return `${this.name} (${this.classType})(${this.Specialization}) hits with ${this.specialAbility}!`
    }
}