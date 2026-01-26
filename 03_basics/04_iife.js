// Immediatly Invoked Function Expressions (IIFE)

(function myApi(){                 //named iife
    console.log(`Db connection`)
})();

((name)=>{
    console.log(`DB CONNECTION TWO ${name}`)    //unnamed iife


    
})("viplove")