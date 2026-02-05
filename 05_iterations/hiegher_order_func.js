// FOR-EACH-LOOP-----------------------------------------------------------

const coding= ["thor", "shaktiman","ironman", "hulh", "cAmerica"]

// coding.forEach( function (item) {
//     console.log(item);
    
// })
// coding.forEach((value)=>{
//    console.log(value);
// })
// function printMe(item){
//     console.log(item);   
// }
// coding.forEach(printMe)

// coding.forEach((item,index,Array)=>{
//     console.log(item,index,Array);
    
// })


const codingg = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

codingg.forEach((item)=>{
    // console.log(item.languageName);
    
})

// FILTER--------------------------------------------------------------------------

const nums= [1,2,3,4,5,4,6,7,8,9,10]
const result = nums.filter((num)=>{
   return num >= 5
})
// console.log(result);

const books = [
    {
        bookName:"book one",genre:"fiction",publish:"1956",edition:"1948"
    },
    {
        bookName:"book two",genre:"nonfiction",publish:"1966",edition:"1948"
    },
    {
        bookName:"book three",genre:"horror",publish:"1996",edition:"1998"
    },
    {
        bookName:"book four",genre:"fiction",publish:"1956",edition:"1948"
    },
    {
        bookName:"book five",genre:"non horor",publish:"1926",edition:"1948"
    },
    {
        bookName:"book six",genre:"ferrtail",publish:"1976",edition:"1948"
    }
]
let myBooks = books.filter((obj)=>{
       return obj.genre == "fiction"
})
myBooks = books.filter((obj)=>{
       return obj.publish >= 1965  && obj.genre === "horror"
})
// console.log(myBooks);


// ....................................................................

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((num)=> num+10)
// console.log(newNums);


//CHAINING METHOD---------------------------------------------------------------------
const userNumber = [1,2,3,4,5,6,7,8,9,10]

const newnums = userNumber

.map((num)=>num*10)
.map((num)=>num-4).filter((num)=>num>=40)
// console.log(newnums);


// REDUCE - METHOD---------------------------------------------------------------------------

const array1 = [1,2,3,4,5]

// const newArray = array1.reduce(function(acc, currentVal){
//     console.log(`acc is ${acc} and currentval is ${currentVal}`);
    
//     return acc+currentVal
// },0)
// console.log(newArray);
const newArray = array1.reduce((acc, currentVal)=>acc+currentVal,0
)

// console.log(newArray);

// shopping - cart ...................................

const shoppingCart = [
    {
        courseName:"javascript",
        price:2999
    },
    {
        courseName:"python",
        price:3999
    },
    {
        courseName:"java",
        price:4999
    },
    {
        courseName:"datascience",
        price:5999
    },
]
const addPrice = shoppingCart.reduce((acc,item)=>{
       return acc + item.price
},0)
console.log(addPrice);




