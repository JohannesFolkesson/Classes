export class Cars {
    constructor(brand, model, cost) {
        this.brand = brand;
        this.model = model;
        this.cost = cost;

    }

    basicInfo() {
        console.log(`En ${this.brand} (${this.model}) kostar ${this.cost} kronor att köpa.`)
    }

    maxSpeed(amount) {
        this.amount += amount;

        console.log(`${this.brand} (${this.model}) kan nå en top-speed på ${amount} km/h`)
    }

    
}