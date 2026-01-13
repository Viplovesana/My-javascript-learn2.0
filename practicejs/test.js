// console.log("viplove")
//alert("hello viplove") We are using nodejs not a browser

// console.log(3+3)
// console.log("viplove")

// var x = "viplove";
// console.log(x);// not hoisted


// console.log(x);
// var x = "viplove";

// for (var i=0;i<3;i++){
//     console.log("inside",i)//var doesnot support for 
// }
//  console.log("inside",i);

// for (let i=0;i<3;i++){
//     console.log("inside",i)//let is block scope thats why its only exicute inside the block
// }
//  console.log("inside",i);//thorugh error
 
// for (const i=0;i<3;i++){
//     console.log("inside",i)// it cannot change or itrate the value because its constant
// }
//  console.log("inside",i); 

// CONVERSSION OF DATATYPE....................................................................

// ...................CONVERSSIONS...........................
//.............................NUMBER COnverssion........................
// let score ="viplove"
// // const {score} = req.body

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber)

//"33"=>33
//"33abc"=>NaN
//true=> 1;false => 0
//..........................BOOLEAN CONVERSSION.....................

// let isLoggedIn = ""

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 =>true
// 0 =>false
// "" =>false
// "viplove" =>true
//............................STRING CONVERSSIONS........................
// let someNumber = 7

// let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log( typeof stringNumber)

//OPERATIONS......................................................

//practise......................

// let noune = "abc"
// console.log(typeof noune)
// console.log(typeof (noune))

// let convertInNumber = Number(noune)
// console.log(convertInNumber)
// console.log(typeof convertInNumber)

//OPERATIONS..................................................................

// let value = 3
// let negvalue = -value
// console.log(negvalue)

// let str1 = "viplove"
// let str2 = "   sana"
// let str3 = str1+str2
// console.log(str3)

// console.log("2">1)
// console.log("2"==1)
//...........................................................................................
// operators for null value
// console.log(null == 0)
// console.log(null > 0)      
// console.log(null >= 0)
//WE NEVER USE THIS TYPES OF CODE THIS IS NOT A GOOD PRACTICE...........
//..=== STRICT check
// console.log(undefined >= 0)
// console.log(undefined < 0)
// console.log(undefined > 0)

//...........................................................................................

//...DATATYPE_CHEAK....................


// const isNUmber = 123
// console.log(isNUmber)

// const id = Symbol("@#")
// const anotherId = Symbol("@#")
// console.log(id == anotherId)

// let bigNumber = 12345678765n
// console.log(bigNumber)

//Non datatype (refrence type)

//Array ,Object ,Function

// const heros = ["shaktiman","naajraj","doga"];//ARRAY
// let myObj = {
//     name: "viplove",
//     age: 23,
// }//OBJECT

// const myFunction = function(){
//       console.log("Hello world");
// }//FUNCTION
// console.log(typeof myFunction)
// console.log(typeof heros)
// console.log(typeof myObj)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//there are two types of memory's are there in javascript

//1 STACK memory(Primitive) in primitive datatypes uses the Stack Memory
//2 HEAp memory(Non-primritive) in non-primitive datatypes uses the Heap Memory

//EXAMPLE of stact memory
// let myInstaId = "viplovesana"

// let myAccount = myInstaId

// myAccount = "anotheraname"

// console.log(myInstaId)
// console.log(myAccount) // have the changed inn the copy not in actual value or data

//EXAMPLE of heap memory
// let userOne = {
//     email:"davisfennylove@gmail.com",
//     bankAcc:"SBI"
// }
// let userTwo = userOne
// userTwo.email = "harshmaheshwari.com"
// // userTwo = {
// //     email:"harshmaheshwari@gmail.com",
// //     bankAcc:"HDFC"
// // }
// console.log(userOne.email)
// console.log(userTwo.email)
