//array

const myArray = [0,1,2,3,4,5]

// console.log(myArray[2])

//Array Method.....

// myArray.push(7)   //to add thee last element 
// myArray.pop()     //to remove the last element

// myArray.unshift(8)         //to add and shift the addeded element in the begning
// myArray.shift()               //remove the the elemnt from the bigginning

// console.log(myArray.includes(6))
// console.log(myArray.indexOf(3))

// const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr);

//Slice, Splice................................

console.log("A = ",myArray)                           //differnce b/w slice and splice...

const secondArr = myArray.slice(1,3)
console.log(secondArr)

console.log("B = ",myArray)
const thirdArr = myArray.splice(1,3)
console.log("C = ",myArray)
console.log(thirdArr)

