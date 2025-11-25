export class Player { //enstaka spelare mall
    constructor(name, age, position, club, price, image, isSold = false) {

        this.name = name;
        this.age = age;
        this.position = position;
        this.club = club;
        this.price = price;
        this.image = image;
        this.isSold = isSold;
        

    }

   
}