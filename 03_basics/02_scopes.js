//............SCOPES..........................................

let a = 100
if(true){
   let a = 3
   const b = 4
//    console.log(a)        
}
//    console.log(a);


// .... scope in the function with nested function .....................

function primaryFun(){
    const mark1 = "iron-man"

    function secondaryFun(){
        const mark2 = "roddy"
        console.log(mark1)
    };
    // console.log(mark2) // not execcesble..............................

    secondaryFun()
};
// primaryFun()

//...............function with if else .........................

if(true){
    const name = "viplove"
    if(name === "viplove"){
        const frndname = "piyush"
        // console.log(name,"and", frndname )
    }
    // console.log(frndname)
}
// console.log(name)


//   intresting.........................................
console.log(addOne(5))  
function addOne(num){
    return num + 1
}
addTwo(5)
const addTwo = function(num){      // this is the another type of funtion which is hold by the variable which is also called expression 
    return num + 2
}
//......................................................