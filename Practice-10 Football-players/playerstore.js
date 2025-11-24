export class PlayerStore { // min låda/samling med spelare

    constructor() {
    this.players = [];
    }

addPlayer(player){
    this.players.push(player);
}

getPlayerById() {
    return this.players.find(p => p.id === id)
}

getAllPlayers() {
    return [...this.players];
}

getAvailablePlayers() {
    return this.players.filter(p => !p.isSold)
}

filterByPosition(position) {
    return this.players.filter(p => p.position === position)
}

filterByClub() {
    return this.players.filter(p => p.club === club)
}

}   

