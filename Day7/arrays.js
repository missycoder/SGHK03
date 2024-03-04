// CREATE AN ARRAY
let fruits = ['apples', 'bananas', 'oranges', 'mangoes'];
console.log(fruits);

// Accessing elements
console.log('First Fruit: ', fruits[0]);
console.log('Second Fruit: ', fruits[1]);
console.log('Third Fruit: ', fruits[2]);
console.log('Last Fruit: ', fruits[fruits.length -1])

// Modifying arrays
fruits[1] = 'grapes';
console.log('Modify `bananas` to `grapes` into the array: ', fruits);

// Adding or `push` arrays
fruits.push('strawberries');
console.log('Push `strawberries` into the array: ', fruits);

// Delete or `pop` arrays
fruits.pop();
console.log('`pop` or delete the `strawberries` from the array: ', fruits);


// ITERATION
let vegetables = ['cabbage', 'carrot', 'cucumber', 'tomato'];

for(let i = 0; i < vegetables.length; i++) {
    console.log("Vegetables: ", vegetables[i]);
}

// BUILT-IN METHOD
// functions are re-usable blocks of code
// `forEach` only accepts the `function` parameter
// Example One
let colors = ['red', 'blue', 'green', 'yellow'];
colors.forEach(function (color) {
    console.log('Color: ', color);
})

// Example Two
let menu = ['tajine', 'couscous', 'harira', 'khubz'];
menu.forEach(function (menu) {
console.log('Menu: ', menu);
})