//FOR-OF LOOP IN MAP...................................................
// MAPS...................................................

const map = new Map()
map.set("name","viplove")
map.set("age","23")
map.set("city","Bhopal")

// console.log(map);

// for (const [key,value] of map) {
    // console.log(key, ':-',value);
    
// }
//.....................................................................

const myobject = {
    "game":"NFS",
    "game2":"spiderman",
    "game3":"shaktiman"
}
// for (const [key,value] of myobject) {
//     console.log(key,":-",value);
    
// }
// for-in in object itration...........................................
const myObject= {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
//   console.log(`${key} is the shortcut of ${myObject[key]}`);   
}

// for-in Array of itretion.........................

const myObjecttwo = ["js", "rb", "py", "java", "cpp"]

for (const key in myObjecttwo) {
    // console.log(myObjecttwo[key]);
}

const mapAL = new Map()
map.set("name","viplove")
map.set("age","23")
map.set("city","Bhopal")

for (const [key,value] in mapAL) { 
    console.log(mapAL[key,value]);   
}
//  

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
const myBooks = books.filter((obj)=>{
       return obj.genre == "fiction"
})
console.log(myBooks);




