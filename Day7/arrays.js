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

// COMMON ARRAY METHODS
// `colors.length` will print out `4` in console
console.log("Array Length: ", colors.length);

// indexOf 
console.log("Index of Green: ", colors.indexOf('green'));

// includes
// `includes` will print out `true` or `false`
// caseSensitive
// `yellow` print out as `true`; `Yellow` print out as `false`
console.log("Includes Yellow: ", colors.includes('yellow'));

// join (comma, dash, asterisk, /, etc)
console.log("Joined Array: ", colors.join('*'));

// slice
// slice accepts 2 arguments
// only index 1 and 2 will print out in console
let slicedArray = colors.slice(1, 3);
console.log("Sliced Array: ", slicedArray);
console.log("Colors Array: ", colors);

// splice
// only index 1 and 3 will print out in console
let removedElements = colors.splice(1, 2);
console.log("Spliced Array: ", removedElements);
console.log("New Colors array: ", colors);