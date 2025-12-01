import { Mage, Priest, Hunter, Shaman } from "./wowclasses.js";

const Jaina = new Mage ("Jaina")
const Velen = new Priest("Velen")
const Rexxar = new Hunter("Rexxar")
const Thrall = new Shaman("Thrall")

const characters = [Jaina, Velen, Rexxar, Thrall]

console.log(Jaina.basicInfo())
console.log(Velen.basicInfo())
console.log(Rexxar.basicInfo())
console.log(Thrall.basicInfo())


const randomChar = characters[Math.floor(Math.random() * characters.length)]

console.log(Jaina.useSpell() + " Hits " + randomChar.name + " for 10 damage!")

console.log(Rexxar.useSpell() + " Crits " + randomChar.name + " for 20 damage!")

console.log(Thrall.useSpell() + " Bashes " + randomChar.name + " for 30 damage!")

console.log(Velen.useSpell() + " Megacrits " + randomChar.name + " for 90 damage!" )




