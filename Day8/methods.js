// STRING
// split
const message = "Hello, World"
const words = message.split(", ");
console.log(words);


// includes
const sentence = "The quick brown fox jumps over the lazy dog."
const containsWord = sentence.includes("cat");
console.log(containsWord);  // output: false

// length - including white spaces
const sampleString = "Welcome to";
const strLength = sampleString.length;
console.log("The string length is:", strLength);

// MATH
// max
const maxNumber = Math.max(10, 5, 20);
console.log("The maximum number is: ", maxNumber);

// min
const minNumber = Math.min(100, 58, 4);
console.log("The minimum number is: ", minNumber);

// random - 0 (inclusive) to 1 (exclusive i.e. will never get value `1`)
const randomValue = Math.random();
console.log("The random value is: ", randomValue);

// floor
const roundedFloor = Math.floor(3.9);
console.log("The number is rounded down to: ", roundedFloor);

// ceil
const roundedCeil = Math.ceil(3.1);
console.log("The number is rounded up to: ", roundedCeil);

// round
const roundedValue = Math.round(3.9);
console.log("The rounded value is: ", roundedValue);

// Nesting math methods
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomInt = getRandomInt(1,10);
console.log("Nesting math methods - Random number is: ", randomInt);

// Other built-in methods
const fixedNumber = (3.1415923454).toFixed(2);
console.log("Number with 2 decimal points:", fixedNumber);

// Date
const currentDate = new Date();
console.log("The current date and time is: ", currentDate);