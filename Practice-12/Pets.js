export class Pets {

    constructor(name, breed, weight) {
        this.name = name;
        this.breed = breed;
        this.weight = weight

    }

    basicInfo() {
        console.log(`${this.name} är en ${this.breed} och väger ${this.weight} kg.`)
    }

    runLength(amount) {
        this.amount += amount;
        console.log(`${this.name}(${this.breed}) springer ${amount} km innan hon blir trött.`)


    }

}