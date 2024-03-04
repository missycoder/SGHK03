// 1. Create an Object Literal representing a person
const person = {
    // 2. Added properties
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ['running', 'reading', 'coding'],
    // 3. Adding a method
    greet: function() {
        console.log("Hello, my name is " + person.firstName + " " + this.lastName);
    }
};

// 4. Accessing object properties
console.log("First name: ", person.firstName);
console.log("Last name: ", person.lastName);
console.log("Age: ", person.age);
console.log("Hobbies: ", person.hobbies);
person.greet();

// 5. Modify object properties
person.lastName = "Smith";
console.log("Modify last name: ", person.lastName); // to print out `lastName` only in console

// 6. Adding new properties
person.nationality = "Australian";
console.log("Nationality: ", person.nationality);

// 7. Adding new methods
person.introduce = function () {
    console.log("I am " + person.firstName + " " + person.lastName + ".");
}
person.introduce();

// 8. Nesting objects
const address = {
    street: "123 Main St",
    city: "New York",
    country: "USA",
}
person.address = address;
console.log("Street: ", person.address.street); // print out only `street` in console
console.log(person.address);        // print out full `address` in console

// 9. Using object destructuring to extract properties
const {firstName, lastName, age} = person;
console.log(firstName, lastName,",", age);



