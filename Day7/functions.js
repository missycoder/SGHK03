// functions
// Defining a function
function greet() {
    console.log("Hello, welcome to the world of functions!");
}

// Calling a function
greet();

// Two Ways to Write a Function
// 1. Function Declaration
function squareDeclaration(num) {
    return num * num
};

// 2. Function expression
// anonymous function
const squareExpression = function(num) {
    return num * num;
}; 

console.log("Square for function declaration: ", squareDeclaration(5));
console.log("Square for function expression: ", squareExpression(6));


