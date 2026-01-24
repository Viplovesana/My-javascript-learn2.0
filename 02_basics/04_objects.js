

// const userObject = new Object()  //single ton object
// const tinderObject = {}

// tinderObject.id = "123abc"
// tinderObject.name = "davidfennylove"
// tinderObject.inlogged = false

// console.log(userObject);
//......................................................................................
// const regularUser = {
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstName:"viplove",
//             lastName:"Sana"              //nested objects
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.lastName)
//.......................................................................................

//combine objects...............................................

// const user1 = {1:"a",2:"b"}
// const user2 = {3:"c",4:"d"}

// // const user3 = {...user1, ...user2}//        ...spread method...
// const user3 =Object.assign(user1, user2) 
// console.log(user3) 

//Array of objects..............................................


// const userObject = [
//     {
//         id:"abc123",
//         email:"harsh@123gmail.com"
//     },
//     {
//         id:"abc124",
//         email:"david@789gmail.com"
//     },
//     {
//         id:"abc125",
//         email:"viplove!@123gmail.com"
//     }
// ]
// const ansObject = userObject[2].id
// console.log(ansObject)
//                                          // two methods of eccessing.................
// console.log(userObject[2].email)

// console.log(tinderObject)

// const userData = [
//     {
//         name:"avees",
//         email:"avees@123gmail.com"
//     },
//      {
//         name:"vipin",
//         email:"vipin@123gmail.com"
//     },
//      {
//         name:"charuu",
//         email:"charuu@123gmail.com"
//     }
// ]
// console.log(userData[1].name)
// console.log(userData[2].email)

// console.log(tinderObject)
// console.log(Object.keys(tinderObject))
// console.log(Object.values(tinderObject))
// console.log(Object.entries(tinderObject))
// console.log(tinderObject.hasOwnProperty("id"))



// .......................DeStructuring Method.......................................

// const course = {
//     courseName:"javaScript",
//     price:999,
//     courseInstructor:"hiteshBhaiye"
// };
// console.log(course.courseInstructor)

// const {courseName : cName}=course
// console.log(cName)

//    APIs........................................................

// {
//     "name":"viplove",
//     "city":"Bhopal",
//     "email":"viplovesana90@gmail.com"
// }

// [
//     {},
//     {},
//     {}
// ]


//destructuring practice ..........................

// const myName = {
//     thisname : "devidfennylove",
//     email : "devid123@gmail.com"
// }
// const {email:myEmail} = myName
// console.log(myEmail)