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




