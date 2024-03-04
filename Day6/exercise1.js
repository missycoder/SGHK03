const kelvin = 293;

// 3. Convert Kelvin to Celsius
const celsius = kelvin - 293;

// 5. Convert Celsius to Fahrenheit
const Fahrenheit = (celsius * (9/5) + 32).toFixed(1);

// 7. Log temperature in Fahrenheit to the console
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);


// ADVANCE
let score = 100;
let grade1 = 'F';

if (score == 100) score -= 1;

score = Math.floor(score/10);

if (score>=6) grade1 = String.fromCharCode('F'.charCodeAt() - (score - 4));

console.log(`Your Score:${score}Grade:${grade1}`);

const gradeTable = [
{grade: "A", ScoreRange: '90 or above'},
{grade: "B", ScoreRange: 'between 80 and 89,'},
{grade: "C", ScoreRange: 'between 70 and 79,'},
{grade: "D", ScoreRange: 'between 60 and 69,'},
{grade: "F", ScoreRange: 'below 60'},
];

console.group("Table for Grades");
console.table(gradeTable);
console.groupEnd();