// const userEmail = "viplove@123" // have a true value in the string

// if (userEmail) {
//     console.log("Got user Email");
// }else{
//     console.log("dont, have user Email");   

// }
const userEmail = "" // have the flase value string is empty 

if (userEmail) {
    console.log("Got user Email");
}else{
    console.log("dont, have user Email");   
}

// falsy values ......

// false , 0, -0, BigInt 0n, "", null, undefined, NAN 

// truthy values .......

// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const checkObject = {}
if (Object.keys(checkObject).length === 0) {
    console.log("Object is Empty");  
}

// nullish Coalescing Operator (??):-null, undefined.....................

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 16
val1 = null ?? 10 ?? 16

console.log(val1);


// Terniaryt Operator...........................

// condition ? true : false

const iceTea = 100

iceTea <=80 ? console.log("less than 80") : console.log("more than 80")




