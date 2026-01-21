//function...........

// function myNameIs(){
// console.log("v");
// console.log("i");
// console.log("p");
// console.log("l");
// console.log("o");
// console.log("v");
// console.log("e");
// };
// myNameIs()

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
    
// };

// function addTwoNumber(number1,number2){
//    let result = number1 + number2
//    console.log("viplove")   
//    return number1 + number2  
// };
// const result = addTwoNumber(40,50)
// console.log(result)

// const result = addTwoNumber(20 ,30)
// console.log("result: ",result);

function loginUserMassage(username = "sam"){
    if (!username){
        console.log("please enter the user name😒")
        return
    };
    if (username === "viplove sana"){
        console.log("learn JavaScript as soon as possible")
    }
return `${username} just logged in`
}
const user = loginUserMassage("viplove sana")
console.log(user);
console.log(loginUserMassage("ananya sahu"))
console.log(loginUserMassage()) //empty then run the if condition 

