// //singleton

// //object litterals....

// const mySym = Symbol("key1")
 
// const jsUser = {
//     name:"viplove",
//     [mySym]: "mykey1",
//     age: 23,
//     city: "dewas",
//     email:"viplovesana90@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays: ["monday", "Sunday"]
// }
// console.log(jsUser.name)
// console.log(jsUser["email"])
// console.log(jsUser[mySym])

// jsUser.email = "davidfennyloce1234@gmail.com"
// console.log(jsUser["email"])

// //Object Locked we cannot replace or change the value of thr key inside the object....
// Object.freeze(jsUser) 
// jsUser.age = 24
// console.log(jsUser["age"])

// console.log(jsUser)

// const mySymbol = Symbol("mykey1")
// const userOne = { 
//     name: "viplove",
//     [mySymbol]: "mykey2",
//     email:"viplovesana@1234",
//     age:23
// }
// console.log(userOne[mySymbol])
// userOne.email = "viplovesana90@gmail.com"
// console.log(userOne)

// Object.freeze(userOne)
// userOne.email = "davidfennylove123"
// console.log(userOne)
// const jsUser = {
//     name:"viplove"
// }
// jsUser.greeting = function(){
//     console.log("hello-viplove-hope-all-good")
// }
// jsUser.greetingTwo = function(){
//     console.log(`my name is ${this.name}`)
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

// const myJs = {
//    name:"viplove Sana",
//    city:"bhopal",
//    Age:"23"
// }
// myJs.greeting = function(){
//     console.log("hey viplove you'r learning JS")
// }
// myJs.greetingTwo = function(){
//     console.log(`hey my name is ${this.name}`)
// }
// console.log(myJs.greeting());
// console.log(myJs.greetingTwo());


// practice this concept.....................................................

// const myScope = {
//     company:"netlink",
//     department:"frontend-Dev"
// };
// myScope.greetingFunc = function(){
//     console.log(`my aim is to take entry on ${this.company} as a ${this.department}`)
// };
// console.log(myScope.greetingFunc())













