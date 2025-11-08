class FootballPlayer {
    constructor(name, position, OVR, PAC, SHO, PAS, DEF, DRI, PHY) {
        this.name = name;
        this.position = position;
        this.OVR = OVR;
        this.stats = {PAC, SHO, PAS, DEF, DRI, PHY}
    }

    showCard() {
        console.log(`${this.name.toUpperCase()} 
        POS: ${this.position}
        OVR: ${this.OVR} 
        
        PAC: ${this.stats.PAC} SHO: ${this.stats.SHO} PAS: ${this.stats.PAS} DEF: ${this.stats.DEF} DRI: ${this.stats.DRI} PHY: ${this.stats.PHY}
        
        
        `)
    }

    train(stat, amount = 1) {
    if (!(stat in this.stats)) {
      console.log("Stat finns inte:", stat);
      return;
    }
    this.stats[stat] = Math.min(99, this.stats[stat] + amount);
    console.log(`${this.name} tränar ${stat} +${amount} → ${this.stats[stat]}`);
  }

  renderCard(container) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div style="overflow:hidden;">
        <h3>${this.name}</h3>
        <div class="meta">${this.position} <span class="overall">${this.OVR}</span></div>
      </div>
      <hr>
      <div class="stat"><span>PAC</span><span>${this.stats.PAC}</span></div>
      <div class="stat"><span>SHO</span><span>${this.stats.SHO}</span></div>
      <div class="stat"><span>PAS</span><span>${this.stats.PAS}</span></div>
      <div class="stat"><span>DEF</span><span>${this.stats.DEF}</span></div>
      <div class="stat"><span>DRI</span><span>${this.stats.DRI}</span></div>
      <div class="stat"><span>PHY</span><span>${this.stats.PHY}</span></div>
    `;

    container.appendChild(card);
  }
}

const cardsContainer = document.getElementById("cards");
const player1 = new FootballPlayer("Johannes Folkesson", "ST", 90, 77, 30, 33, 83, 93, 92);
player1.renderCard(cardsContainer);
