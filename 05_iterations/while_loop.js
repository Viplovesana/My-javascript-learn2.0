// while...........................
let index = 0
while (index <= 10) {
    // console.log(`value of index is ${index}`);
    index = index + 2
}

let myArray = ["flash", "superman", "ironman" , "ninjahatodi"]
let i = 0
while (i < myArray.length) {
  console.log(`value is ${myArray[i]}`);
  i++
}
// let myArray = ["flash", "superman", "ironman" , "ninjahatodi"]

// for (let i = 0; i < myArray; i++) {
//     const element = myArray[i];
//     console.log(element);   
// }

let ii = 0
while (ii <= 25 ){
  console.log(`the outer lopp is ${ii*2}`);
  ii++;
  let jj = 0
  while (jj<=25) {
    console.log(ii,"*",jj,"=",ii*jj);
  jj++  
  } 
}