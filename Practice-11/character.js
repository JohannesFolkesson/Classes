export class Character {

    constructor(name, classType, Specialization) {
        this.name = name;
        this.classType = classType;
        this.Specialization = Specialization;

        this.level = level;
        this.xp = xp;
        this.maxHP = 100;
        this.currentHP = maxHP;
        this.maxMana = 100;
        this.currentMana = maxMana;


    }

    basicInfo() {
        return `Name: ${this.name} - Class: ${this.classType} - Spec: ${this.Specialization}`
    }


}