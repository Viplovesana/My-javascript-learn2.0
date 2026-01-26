//.........................ARROW FUNCTION....................................

const user = {
    username:"viplove",
    price:999,

    welcomeMassage: function(){
        console.log(`${this.username} welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMassage()
// user.username="sam"
// user.welcomeMassage()

//  console.log(this);


// function thatAll(){
//     let username = "viplove"
//    console.log(this.username)
// }
//  thatAll();

// .............................................................

// const chai = function(){
//      let username = "viplove"
//    console.log(this.username)
// }
// chai()
const chai = () => {
     let username = "viplove"
   console.log(this);
}
// chai()

// const addValue = (num1, num2) => {
//      return num1+num2
// }
// console.log(addValue(23, 67))


// ....................implisit return....................................

// const addValue = (num1, num2) =>  num1+num2

// const addValue = (num1, num2) =>  (num1+num2)

const addValue = (num1, num2) => ({usernamee:"viplove"}) //object return  .....in ( )

console.log(addValue(23, 67))


// ...practise ................................
const data = [10, 20, 30, 40, 50, 60]
const mypractice = (myData) =>{return myData[4]}
console.log(mypractice(data))