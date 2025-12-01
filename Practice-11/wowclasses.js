import { Character } from "./character.js"


export class Mage {
    constructor(Mage, Frostbolt) {
        this.Mage = Mage;
        this.Frostbolt = Frostbolt;

    }

    useSpell() {

        return `${this.name} casts ${this.Frostbolt}.`

    }
}