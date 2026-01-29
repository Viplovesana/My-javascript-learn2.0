// for


for(let i = 0; i < 8; i++ ){
    const result = i
    if(result == 5){
        // console.log("five is the best nnumber");
        
    }
    // console.log(result);   
}

// simple table print...................................
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop of ${i}`);
     for (let j = 1; j <=10; j++) {
        // console.log(i + "*" + j  + "=" + i*j);  
     }   
}

//Array..........................
let myArray = ["flash", "superman", "ironman", "thor"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element); 
}

//numbring.....................
// let number  = 7
// for (let i = 0; i < number; i++) {
//     const result = i
//     console.log(result);   
// }
let number  = 7 
for (let i = 0; i < number; i++) {
    // console.log(`this is the number${i}`);

}

//....................BREAK AND CONTINUE KEYWORD...........................
//break...................
for (let index = 1; index <= 10; index++) {
    if(index == 5){
        // console.log(`stop here ${index} is danger`);
        break
    }
    // console.log(`value of i is ${index}`);   
}

//continuee........
for (let index = 1; index <= 10; index++) {
    if(index == 5){
        // console.log(`stop here ${index} is danger`);
        continue
    }
    // console.log(`value of i is ${index}`);   
}