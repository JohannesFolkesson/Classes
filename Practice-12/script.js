import { Pets } from "./Pets.js"

const Beagle = new Pets("Cleo", "Beagle", 18)
const Pomeranian = new Pets("Zoey", "Pomeranian", 3)

Beagle.basicInfo()
Pomeranian.basicInfo()


Beagle.runLength(9)
Pomeranian.runLength(1.8)

