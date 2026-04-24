const prompt = require('prompt-sync')();

let number = prompt("Enter a number: ");

    for(let count = 1; count <= 100; count++){

        if(number % count == 0){

            console.log(count);            
            }   
        
    }



factorial = 1;
let age = 5;

for(let count = 2; count <= age; count++){
    
    factorial *= count;
}
console.log(factorial);
    
//
//let scores = 42;
//
//    if(scores < 42){
//    console.log("fail")
//    
//    'else' 
//
//    console.log("pass")
//}
//
//







        
