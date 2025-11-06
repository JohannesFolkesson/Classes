class Car {
    constructor(brand, model , speed) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;


    }
    accelerate(amount) {
        this.speed += amount;
        console.log(`${this.brand} ${this.model} gasar och ökar hastigheten med ${amount} km/h`)
    }

    brake(amount) {
        this.speed -= amount
        if(this.speed < 0) this.speed = 0;
        console.log(`${this.brand} ${this.model} bromsar och minskar farten med ${amount} km/h `)
    }

    showStatus() {
        console.log(`${this.brand} ${this.model} kör i farten ${this.speed} km/h`)
    }
}

const Car1 = new Car("Tesla", "Model Y", 90);
const Car2 = new Car("Nissan", "Qashqai", 60);

Car1.brake(40)
Car2.brake(30)

Car1.accelerate(70)
Car2.accelerate(50)

Car1.showStatus()
Car2.showStatus()