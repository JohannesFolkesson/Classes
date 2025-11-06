class Pet {

    constructor(name, species, energy) {
        this.name = name;
        this.species = species;
        this.energy = energy;



    }

    play(minutes) {
        const energyLoss = minutes * 2
        if(this.energy > energyLoss) {
            this.energy -= energyLoss
            console.log(`${this.name} plays for ${minutes} and becomes abit tired`)
        }
        else {
            this.energy = 0;
            console.log(`${this.name} is to tired to play`)
        }
    }

    eat(foodAmount) {
        

    }

    sleep(hours) {

    }

    showStatus() {

    }

}