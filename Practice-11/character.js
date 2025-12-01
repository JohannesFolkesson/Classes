export class Character {

    constructor(name, classType, Specialization) {
        this.name = name;
        this.classType = classType;
        this.Specialization = Specialization;

    }

    basicInfo() {
        return `Name: ${this.name} - Class: ${this.classType} - Spec: ${this.Specialization}`
    }


}