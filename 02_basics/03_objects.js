//singleton

//object litterals....

const mySym = Symbol("key1")
 
const jsUser = {
    name:"viplove",
    [mySym]: "mykey1",
    age: 23,
    city: "dewas",
    email:"viplovesana90@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["monday", "Sunday"]
}
console.log(jsUser.name)
console.log(jsUser["email"])
console.log(jsUser[mySym])

jsUser.email = "davidfennyloce1234@gmail.com"
console.log(jsUser["email"])

//Object Locked we cannot replace or change the value of thr key inside the object....
Object.freeze(jsUser) 
jsUser.age = 24
console.log(jsUser["age"])

console.log(jsUser)









