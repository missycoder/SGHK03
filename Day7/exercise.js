// Loop through numbers 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check for multiples of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) { // Check for multiples of 3
      console.log("Fizz");
    } else if (i % 5 === 0) { // Check for multiples of 5
      console.log("Buzz");
    } else { // Print the number itself
      console.log(i);
    }
  }
  