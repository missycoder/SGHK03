// let score = 90;
// let score = 84;
// let score = 78;
// let score = 65;
let score = 53;

if (score >= 90) {
    console.log("Grade A");
} else if (score >=80 && score <=89) {
    console.log("Grade B");
} else if (score >=70 && score <=79) {
    console.log("Grade C");
} else if (score >=60 && score <=69) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}


// ADVANCE
const kelvin = 293;
// above code initializes a constant, kelvin, with value of 293

let celsius = kelvin - 273;
//above code initializs a variable, celsius, with the value that is the difference between the temperature value of kelvin(here 293) and 273(freezing point of water)
//so basically we are converting kelvin to celsius

let fahrenheit = celsius * (9/5) + 32;
// above code converts celius to fahrenheit
//we have declared and initialised the variable fahrenheit on the left based on the using variable celsius based on the formula/expression on the right


console.log(`%cConversion of Kelvin to Fahrenheit:`,
            `background: #F7941E;
            background: linear-gradient(to right, #F7941E,#72C6EF,#00A651);
            color: rgba(230,230,230,1);
            font-size: 1rem;
            padding: 0.8rem;
            border-radius: 0.5rem`
            );
console.log(`\t\t🔥 ${kelvin}K :\t ${fahrenheit}°F 🔥`);
