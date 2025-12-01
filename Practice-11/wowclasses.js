import { Character } from "./character.js"


export class Mage extends Character {
    constructor(name) {
       super(name, "Mage")
       this.specialAbility = "Frostbolt"

    }

    useSpell() {

        return `${this.name} - ${this.classType} casts ${this.specialAbility}!`

    }
}