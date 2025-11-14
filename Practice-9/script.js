class ProductCard {
    constructor(name, image, size, price) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.size = size;

        this.container = document.createElement('div')
        document.body.appendChild(this.container)

        this.card = document.createElement('div')
        this.container.appendChild(this.card)

        this.container.classList.add('user-list')
        this.card.classList.add('user-card')

        this.render();
    }

    render() {
        this.card.innerHTML = ''

        this.card.innerHTML = `
        <img class= "product-img" src = "${this.image}" alt= "${this.name}">
        <h2> ${this.name}</h2>
        <p> ${this.size} </p>
        <p> ${this.price} $ </p>


        `
    }
}

const Product1 = new ProductCard( "Women Shirt", "https://static.zara.net/assets/public/fbb1/b2b2/b725497a9c6e/ec9c3bc95489/05536639719-e1/05536639719-e1.jpg?ts=1759477905086&w=1440", "Medium", 22)
const Product2 = new ProductCard("Mens T-shirt", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojQExZDXEEUp73wItCiNQ3gLgpXCCrCY-YA&s", "Large", 18)