const name = "srujan"
const age = 20
console.log(name + age)

console.log(' Hello my name is ${name} and I am ${age} years old') // do not use normal ticks always ude backticks
console.log(`Hello my name is ${name} and I am ${age} years old`); // correct way
// also using placeholders is best way rather than just adding strings.


const gamename = new String('srujangame') // run this in console (here string is object )

console.log(gamename[0]); // returned first letter of "srujan" that is "s"

console.log(gamename.__proto__); // returned object "{}" it is empty

console.log(gamename.length); // returned length as 10.
console.log(gamename.toUpperCase()); // returned  uppercase version of the string i.e., SRUJANGAME. it did not change original value 
// It means there are total 10 characters present in the string. 

console.log(gamename.charAt(2)); // returned "u"
console.log(gamename.indexOf('u')); // returned 2




/*
*********************************************************Summary***********************************************************************

strings can be denoted with 'single' or "double quotes"  and do not require any special characters. 
Strings are used to store text data in programming languages.

String Interpolation: String interpolation in JavaScript is a way to embed or insert variables into a string. 
Instead of using concatenation with the + operator, you can use template literals, enclosed by backticks ( ), 
to include variables directly within a string.
 the ${} syntax allows you to embed variables (name and age) directly within the string.
 The result is a more concise and readable way to create strings with dynamic content.


 


*/