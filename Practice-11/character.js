export class Character {

    constructor(name, classType, Specialization) {
        this.name = name;
        this.classType = classType;
        this.Specialization = Specialization;

        this.level = level;
        this.xp = xp;
        this.maxHP = maxHP;
        

    }

    basicInfo() {
        return `Name: ${this.name} - Class: ${this.classType} - Spec: ${this.Specialization}`
    }


}