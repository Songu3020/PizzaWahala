    const prompt = require("prompt-sync")();

    const pizzaTypes = {
        "Sapa Size":{slices: 4, price: 2000},
        "Small Money":{slices: 6, price: 2400},
        "Big Boys":{slices: 8, price: 3000 },
        "Odogwu": {slices: 12, price: 4200}
    };

    const menu = `
    Pizza Type       Number of Slices          Price Per Box
    --------------------------------------------------------
    Sapa Size        4                         2,000
    Small Money      6                         2,400
    Big Boys         8                         3,000
    Odugwu           12                        4,200
    `;

    console.log(menu);

    const numberOfPeople = Number(prompt("Enter number of people: "));
    const pizzaTypeInput = prompt("Enter pizza type: ");
    
    const selectedPizza = pizzaTypes[pizzaTypeInput] || {slices: 0, price: 0};

    const slicesPerBox = selectedPizza.slices;
    const pricePerBox = selectedPizza.price;

    const numberOfBoxes = Math.ceil(numberOfPeople / slicesPerBox);
    const totalSlices = numberOfBoxes * slicesPerBox;
    const leftoverSlices = totalSlices - numberOfPeople;
    const totalPrice = numberOfBoxes * pricePerBox;

    console.log(`Number of boxes of pizza to buy = ${numberOfBoxes} boxes`);

    console.log(`${pizzaTypeInput}: ${slicesPerBox} slices per box, total slices = ${totalSlices}`);

    console.log(`Leftover slices = ${leftoverSlices}`);
    console.log(`Prices = ${totalPrice}`);
