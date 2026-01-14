//Array.....................

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["Flash","superman","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

//Spread Method................for concatinate
// const AllNewHeros = [ ...marvel_heros, ...dc_heros]
// console.log(AllNewHeros)

//Flat method .................for concatinate or for spreading the element in single variable 
const nextArray = [1,2,3,4,[5,6,7],8,[9,10]];
const nextAnotherArray = nextArray.flat(4);
console.log(nextAnotherArray)


console.log(Array.isArray("viplovesana"))//questioning whether array or not
console.log(Array.from("viplovesana"))
console.log(Array.from({name:"vopve"}))

//forming array with the variables......................
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));

