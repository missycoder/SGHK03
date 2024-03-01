const kelvin = 293;

// 3. Convert Kelvin to Celsius
const celsius = kelvin - 293;

// 5. Convert Celsius to Fahrenheit
const Fahrenheit = (celsius * (9/5) + 32).toFixed(1);

// 7. Log temperature in Fahrenheit to the console
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);
