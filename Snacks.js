function calculateWage(successfulDelivery){
       
    let rate;

    let wages;

    if(successfulDelivery < 50){

     rate = 160;

     let wages =(successfulDelivery * rate ) + 5000

     console.log("Below 50%(25): ",wages);

     }else if(successfulDelivery >= 50 && successfulDelivery <= 59){
 
     rate = 200;

      let wages =(successfulDelivery * rate ) + 5000  
      
      console.log("Below 55-59%(55):", wages);

      }else if(successfulDelivery >= 60 && successfulDelivery <= 69){

       rate = 250;

       let wages =(successfulDelivery * rate ) + 5000 
           
          console.log("Below 60-69%(65):", wages);

      }else{
              
        rate = 500;
 
         let wages =(successfulDelivery * rate ) + 5000  

    console.log("70%+ (80):", wages);
    }
 
           
}


const prompt = require('prompt-sync')();

let successfulDelivery = Number(prompt("Enter successful deliveries: "));

calculateWage(successfulDelivery)

 
 
 
 
