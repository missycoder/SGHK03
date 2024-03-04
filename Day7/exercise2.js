function findLargestNumber(arr) {
    let largest = arr[0]; // Start by assuming the first number is the largest
  
    // Loop through the rest of the array
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        // If the current number is greater than the current largest, update largest
        largest = arr[i];
      }
    }
  
    // Return the largest number
    return largest;
  }
  
  // Example usage:
  const numbers = [5, 23, 12, 34, 56, 87, 2];
  const largestNumber = findLargestNumber(numbers);
  console.log(largestNumber); // Output: 87
  