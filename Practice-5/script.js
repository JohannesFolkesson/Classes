class Fisk {
    constructor(name, weight, length) {
        this.name = name;
        this.weight = weight;
        this.length = length;

    }

    eat(amount) {
        this.weight += amount
        console.log(`${this.name} eats ${amount}kg food, and its new weight is ${this.weight.toFixed(1)}`)

    }
    swim(distance) {
        const lostWeight = distance * 0.01
        this.weight -=  lostWeight;
        if(this.weight < 0) this.weight = 0;
        console.log(`${this.name} swims for ${distance} meters and loses ${lostWeight.toFixed(2)} kg`)

    }

    showStatus(){

        console.log(`${this.name}'s weight is ${this.weight} and its length is ${this.length} cm`)

    }
}


const fish1 = new Fisk("Gädda", 2, 60)
const fish2 = new Fisk("Abborre", 0.8, 40)
const fish3 = new Fisk("Gös", 5, 98)

fish1.eat(1)
fish2.eat(1.2)
fish3.eat(2)

fish1.swim(30)
fish3.swim(70)

fish1.showStatus()
fish2.showStatus()
fish3.showStatus()