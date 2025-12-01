import { Mage, Priest, Hunter, Shaman } from "./wowclasses.js";

const Jaina = new Mage ("Jaina")
const Velen = new Priest("Velen")
const Rexxar = new Hunter("Rexxar")
const Thrall = new Shaman("Thrall")

console.log(Jaina.basicInfo())
console.log(Velen.basicInfo())
console.log(Rexxar.basicInfo())
console.log(Thrall.basicInfo())



console.log(Jaina.useSpell() + " Hits Thrall for 10 damage")




