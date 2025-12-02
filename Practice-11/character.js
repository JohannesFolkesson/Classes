export class Character {

    constructor(name, classType, Specialization, level, xp) {
        this.name = name;
        this.classType = classType;
        this.Specialization = Specialization;

        this.level = level;
        this.xp = xp;
        this.maxHP = 100;
        this.currentHP = this.maxHP;
        this.maxMana = 100;
        this.currentMana = this.maxMana;
        this.attack = 10;
        this.defense = 5;


    }

    basicInfo() {
        return `Name: ${this.name} - Class: ${this.classType} - Spec: ${this.Specialization} - Level: ${this.level}`
    }

    takeDamage(amount) {
        const dmg = Math.max(1, amount - this.defense);
        this.currentHP -= dmg;

        if(this.currentHP <= 0) {
            this.currentHP = 0;
            console.log(`${this.name} has died`)
        }
    }

}