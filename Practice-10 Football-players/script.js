import { Player } from "./footballers.js"
import { PlayerStore } from "./playerstore.js"


const store = new PlayerStore()

const player1 = new Player("Erling Haaland", 23, "Forward", "Manchester City", 180, "images/haaland.jpg")
const player2 = new Player("Kylian Mbappé", 25, "Forward", "Real Madrid", 200, "images/mbappe.jpg")
const player3 = new Player("Luka Modrić", 37, "Midfielder", "Real Madrid", 20, "images/modric.jpg")
const player4 = new Player("Virgil van Dijk", 31, "Defender", "Liverpool", 70, "images/dijk.jpg")
const player5 = new Player("David Raya", 30, "Goalkeeper", "Arsenal", 90, "images/raya.jpg")
const player6 = new Player("Cole Palmer", 23, "Midfielder", "Chelsea", 200, "images/palmer.jpg")
const player7 = new Player("De Bruyne", 34, "Midfielder", "Manchester City", 150, "images/bruyne.jpg")
const player8 = new Player ("Pedro Porro", 29, "Defender", "Tottenham", 80, "images/porro.jpg")
const player9 = new Player("Eden Hazard", 40, "Midfielder", "Chelsea", 300, "images/hazard.jpg")
const player10 = new Player("Mo Salah", 33, "Forward", "Liverpool", 190, "images/salah.jpg")
const player11 = new Player("Jeremy Frimpong", 30, "Defender", "Liverpool", 110, "images/frimpong")
const player12 = new Player()

store.addPlayer(player1)
store.addPlayer(player2)
store.addPlayer(player3)
store.addPlayer(player4)
store.addPlayer(player5)
store.addPlayer(player6)
store.addPlayer(player7)

console.log(store.getAllPlayers())

document.getElementById('all').addEventListener('click', () => {
    renderPlayers(store.getAllPlayers())
})

document.getElementById('forwards').addEventListener('click', () => {
    renderPlayers(store.filterByPosition('Forward'))
})

document.getElementById('midfielders').addEventListener('click', () => {
    renderPlayers(store.filterByPosition('Midfielder'))
})

document.getElementById('defenders').addEventListener('click', () => {
    renderPlayers(store.filterByPosition('Defender'))
})

document.getElementById('goalkeepers').addEventListener('click', () => {
    renderPlayers(store.filterByPosition('Goalkeeper'))
})


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
