class FootballPlayer {
    constructor(name, position, OVR, PAC, SHO, PAS, DEF, DRI, PHY) {
        this.name = name;
        this.position = position;
        this.OVR = OVR;
        this.stats = {PAC, SHO, PAS, DEF, DRI, PHY}
    }

    showCard() {
        console.log(`${this.name.toUpperCase()} (${this.position})}
        
        PAC: ${this.stats.PAC} SHO: ${this.stats.SHO} PAS: ${this.stats.PAS} DEF: ${this.stats.DEF} DRI: ${this.stats.DRI} PHY: ${this.stats.PHY}
        
        
        `)
    }
}

const player1 = new FootballPlayer("Johannes", "ST", 90, 77, 30, 33, 83, 93)
player1.showCard();