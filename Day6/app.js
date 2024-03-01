// Arithmetic Operations
let x = 8;
let y = 5;

// Right click browser, open `inspect`
// Open your `console` tab
let sum = x + y;
console.log("Sum: ", sum);

let diff = x - y;
console.log("Difference: " + diff);

let mult = x * y;
console.log("Product", mult);

let divn = x / y;
console.log("Quotient: " + divn);

let remainder = x % y;
console.log("Remainder: ", remainder);

// String Expression
console.log("Hello, " + "I am " + "Tony Stark!");

// Logical Expression
let sunny = true;
let  warm  = false;

/** AND, OR, NOT
 * true && true = true
 * false && true = false
 * or ||
 * true || true = true
 * true || false = true
 * false || true = true
 * false || false = false
 * not !
 * !true = false
 */

console.log("Sunny AND Warm:", sunny && warm);
console.log("Sunny OR Warm:", sunny || warm);
console.log("NOT Sunny: ", !sunny);

// Assignment Expression
let a = 10;
let b = 5;

// a = a + b;
a += b;
console.log("a: ", a, "(addition)"); // print out as `15` in console

a -= b;
console.log("a: ", a, "(subtraction)"); // print out as `10` in console

a *= b;
console.log("a: ", a, "(multiplication)"); // print out as `50` in console

a /= b;
console.log("a: ", a, "(division)"); // print out as `10` as `50/5` from line 56-57

// Conditional statements
// example 1 - age

// let age = 17;
let age = 21;
               
if (age >= 18) {
    console.log("You are eligible to vote!");
} else {
    console.log("You are NOT eligible to vote.");
}

// example 2 - weather
let temp = -2;
// let temp = 19;
// let temp = 30;
if (temp < 0) {
    console.log("It's freezing!");
} else if (temp >=0 && temp < 20) {
    console.log("It's cool outside!");
} else {
    console.log("It's a warm day!");
;}

