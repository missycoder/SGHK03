// TASK 1:
const square = (num) => num * num;
console.log(square(5)); 

// TASK 2:
const person = {
    name: "John Doe",
    age: 30
  };
  
  console.log("Using template literals ->", `Hello, I'm ${person.name} 
                           and I am ${person.age} years old.`);

  // TASK 3:
  const person2 = {
    firstName: "Tony",
    lastName: "Stark"
  };
  
  const { firstName, lastName } = person2;
  console.log("Using destructuring ->", `First Name: ${firstName}, Last Name: ${lastName}`);
  
  // TASK 4:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// TASK 5:
const calculateArea = (length, width = 1) => length * width;
console.log("The area of a rectangle is: ", calculateArea(5,4)); 
