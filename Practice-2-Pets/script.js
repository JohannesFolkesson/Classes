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
        this.energy += foodAmount * 3
        if(this.energy > 100) this.energy = 100;
        console.log(`${this.name} eats ${foodAmount} food and gains energy`)

    }

    sleep(hours) {
        const energyGain = hours * 10;
        this.energy += energyGain
        if(this.energy > 100) this.energy = 100;
        console.log(`${this.name} sleeps for ${hours} and is ready for another playtime`)

    }

    showStatus() {
        console.log(`${this.name} is a ${this.species} with energylevel of ${this.energy}/100`)
    }

}

const dog1 = new Pet("Cleo", "dog", 90)
const dog2 = new Pet("Zoey", "dog", 30)

dog1.play(10)
dog2.play(5)

dog2.eat(3)
dog1.eat(2)

dog1.sleep(3)
dog2.sleep(5);

dog1.showStatus();
dog2.showStatus();