// Variables and Data Types
let name = 'John'; // String
let age = 25; // Number
let isStudent = true; // Boolean
const PI = 3.14; // Constant

// Operators
let x = 5;
let y = 2;
let z;

z = x + y; // Addition
z = x - y; // Subtraction
z = x * y; // Multiplication
z = x / y; // Division
z = x % y; // Modulus

// Control Structures
if (age >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are a minor.');
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Functions
function greet(name) {
    console.log('Hello, ' + name + '!');
}
greet('Alice'); // Output: Hello, Alice!

const square = (num) => num * num;
console.log(square(4)); // Output: 16

// Arrays
let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[0]); // Output: Apple

fruits.push('Mango'); // Add element at the end
fruits.pop(); // Remove element from the end

// Objects
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
console.log(person.firstName); // Output: John

// Classes and Prototypes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}
let dog = new Animal('Dog');
dog.speak(); // Output: Dog makes a noise.

// Error Handling
try {
    throw 'An error occurred';
} catch (error) {
    console.error(error); // Output: An error occurred
}

// Regular Expressions
let pattern = /hello/;
let str = 'Hello, world!';
console.log(pattern.test(str)); // Output: false

// Modules and Imports
// (Not shown in this example, as it requires working with module systems like ES6 modules or CommonJS)

// DOM Manipulation
document.getElementById('myElement').innerHTML = 'New content';

// Events
document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button clicked!');
});

// Asynchronous JavaScript
setTimeout(function() {
    console.log('Delayed message');
}, 2000); // Output: Delayed message
