//ARROW FUNCTIONS
const greet = (name) => console.log("Hi,", name);
greet('John Doe');


const square = (a) => a*a;
console.log("Answer: ", square(5));


// TEMPLATE LITERALS
let name = 'John Doe';
let age = 25;
// console.log("Hi! I'm "  + name + "and I am " + age + " years old.");

console.log(`Hi! I'm ${name} and I am ${age} years old.`);

// Can be tab down and printed in console
console.log(`Hi! I'm ${name} 
and I am ${age} years old.`);


// DESTRUCTURING
// Array

let nums = [1,2,3];
let [first, second, third] = nums;
console.log("Destructure Array: ", `${first}, ${second}, ${third}`);

// Object
const numbers =  {
    firstNum : 4, 
    secondNum : 5,
    thirdNum : 6
}

let {firstNum, secondNum, thirdNum} = numbers;
console.log("Destructure Object:", firstNum, secondNum, thirdNum);

// ENHANCED Object Literals
const person = {
    name,
    age,
    greet() {
        return `Hi, I am ${name} and I am ${age} years old.`
    }
}
console.log("Enhanced Object Literals: ", person.greet());


// SPREAD AND REST OEPRATOR
// Spread

function sum (x, y, z) {
    return x + y + z;
}
const numbersArr = [13, 23, 24];
console.log("Using the `spread` operator, the sum is: ", sum(...numbersArr));

// Rest
function myFunction (firstArg, ...restOfArgs) {
    console.log("Using the `rest` operator, first value: ", firstArg);
    console.log("Using the `rest` operator, rest of value: ", restOfArgs);
}
myFunction('one', 'two', 'three', 'four', 'five');


// DEFAULT PARAMETERS
function multiply(a, b = 5) {
    return a*b;
}
console.log("Mutiply: ", multiply(8));      // ouput: 40
console.log("Mutiply: ", multiply(8,10));   // output: 80
