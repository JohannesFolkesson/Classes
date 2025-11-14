class Usercard {
    constructor(name, age, image, email) {
        this.name = name;
        this.age = age;
        this.image = image;
        this.email = email;
        this.showBasic = true;


        this.card = document.createElement('div')
        this.container = document.createElement('div')

        this.card.classList.add('user-card')
        this.container.classList.add('user-list')

        document.body.appendChild(this.container)
        this.container.appendChild(this.card)

        this.card.addEventListener('click', () => this.toggleView())

        this.render();
    }

    render() {
        if(this.showBasic) {
            this.card.innerHTML = `
            <h3> ${this.name} </h3>
            <img src="${this.image}" alt="${this.name}">
            `
        }

        else {
            this.card.innerHTML = `
            <h3> ${this.name} </h3>
            <img src="${this.image}" alt="${this.name}">
            <p> E-mail: ${this.email} </p>
            <p> Age: ${this.age}</p>`
            
        }
    }
     toggleView() {
    this.showBasic = !this.showBasic;
    this.render();
  }
}

const user1 = new Usercard("Johannes", 32, "img johannes placeholder", "Johannes1993_@hotmail.com")

console.log(user1)

