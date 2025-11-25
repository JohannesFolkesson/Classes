export class PlayerStore { // min låda/samling med spelare

    constructor() {
    this.players = [];
    }

addPlayer(player){
    this.players.push(player);
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

filterByClub(club) {
    return this.players.filter(p => p.club === club)
}

}   

