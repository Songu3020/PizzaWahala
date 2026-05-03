const successfualDeliveries = 80;

    const totalPackages = 100;

const percentage = (successfualDeliveries/totalPackages) * 100;

    let rate;


if(percentage < 50){

    rate = 160;

}else if(percentage >= 50 and percentage <= 59){
    rate = 200;

}else if (percentage >= 60 and percentage <= 69){
    rate = 300;

}else {

   rate = 500;
}

const wage = (succesfulDeliveries * rate) + 5000;

console.log(wage);

