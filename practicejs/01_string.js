// const namee = "viplove"
// const idNo = 50
// console.log(namee + idNo + "sana")


// String interpolation....................

let name = "Viplove"
let age = "23"
console.log(`My name is ${name} and I am ${age} years old`)

const gameName = new String("Viplove")
// const gameName = new String("Viplove-sana-Hero")
console.log(gameName.substring(0,2))

console.log(gameName [0])

console.log(typeof gameName)

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.indexOf('v'));

console.log(gameName.charAt(4));

console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4)
console.log(newString)

const anotherName = gameName.slice(-6,4)
console.log(anotherName)

const newString1 = "  Viplove  "
console.log(newString1)
console.log(newString1.trim())

const uRl = "https://viplove.come/viplove%20sana";
console.log(uRl.replace('%20','-'))

console.log(uRl.includes("sana"))

console.log(gameName.split("-"))
