class Dog {
    constructor(breed, run, slowDown) {
        this.breed = breed;
        this.run = run;
        this.slowDown = slowDown;
    }

    speed(amount) {
        
        console.log(`${this.breed} springer i ${this.run} km/h och ökar med ${amount} km/h`)
        this.run += amount
    }

    slow(amount) {
        this.run -= amount
        if(this.run < 0) this.run = 0;
        console.log(`${this.breed} stannar upp med ${amount} km/h`)
    }

    showStatus() {
        console.log(`Hunden är en ${this.breed} som för tillfället springer i ${this.run} km/h`)

    }

}


const Hund1 = new Dog("Beagle", 20, 10)
const Hund2 = new Dog("Pomeranian", 9, 2)


Hund1.speed(2)
Hund2.speed(4)

Hund1.slow(5)

Hund1.showStatus()
Hund2.showStatus()

