// EXERCISE 1
// Define the greet function
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Call the greet function with your name
greet("Tony Stark");


// EXERCISE 2
// Declare a global variable globalVar
let globalVar = "Global";

// Define a function with a local variable of the same name
function localVarTest() {
    let globalVar = "Local";
    console.log("Inside the function: " + globalVar);
}

// Log the globalVar before and after calling the function
console.log("Outside the function: " + globalVar);
localVarTest();
console.log("Outside the function after calling localVarTest: " + globalVar);


// EXERCISE 3
// Define the higher-order function mathOperation
function mathOperation(num1, num2, callback) {
    return callback(num1, num2);
}

// Callback functions for addition, subtraction, multiplication, and division
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}

// Test the mathOperation function with different operations
console.log("Addition:", mathOperation(5, 3, add));
console.log("Subtraction:", mathOperation(5, 3, subtract));
console.log("Multiplication:", mathOperation(5, 3, multiply));
console.log("Division:", mathOperation(10, 2, divide));
