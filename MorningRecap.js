const prompt = require('prompt-sync')();

let number = prompt("Enter a number: ");

    for(let count = 1; count <= 100; count++){

        if(number % count == 0){

            console.log(count);
            
            }
    
        
    }




