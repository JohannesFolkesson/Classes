import { Player } from "./footballers.js"
import { PlayerStore } from "./playerstore.js"


const store = new PlayerStore()

const player1 = new Player("Erling Haaland", 23, "Forward", "Manchester City", 180, "images/haaland.jpg")
const player2 = new Player("Kylian Mbappé", 25, "Forward", "Real Madrid", 200, "images/mbappe.jpg")
const player3 = new Player("Luka Modrić", 37, "Midfielder", "Real Madrid", 20)
const player4 = new Player("Virgil van Dijk", 31, "Defender", "Liverpool", 70)
const player5 = new Player("David Raya", 30, "Goalkeeper", "Arsenal", 90)

store.addPlayer(player1)
store.addPlayer(player2)
store.addPlayer(player3)
store.addPlayer(player4)
store.addPlayer(player5)

console.log(store.getAllPlayers())


const container = document.querySelector('#players-container')

function renderPlayers(listOfPlayers) {
    container.innerHTML = "";
    listOfPlayers.forEach(player => {
        const card = document.createElement('div')
        card.classList.add('player-card')

        card.innerHTML = `
        ${player.image ? `<img src="${player.image}" alt="${player.name}">` : ''}
        <h3> ${player.name}</h3>
        <p> Age: ${player.age}</p>
        <p> Position: ${player.position}</p>
        <p> Club: ${player.club}</p>
        <p> Price: ${player.price}</p>
        `
        container.appendChild(card)
    })
}

renderPlayers(store.getAllPlayers())