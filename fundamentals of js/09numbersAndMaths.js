const score = 240

const balance = new Number(100) 

console.log(balance); //  returned [Number: 100]

console.log(balance.toString()); // returned 100
console.log(balance.toFixed(2));
 // returned 100.00 {use this while building e commerce functions} gives 2 decimal places 
// The toFixed() method returns a string representation of a number with fixed decimal points.


const sampleNumber = 123.6658

console.log(sampleNumber.toPrecision(3)); // returned 124  (rounds up because it is closer) it is precision on 3 values  i.e 123
console.log(sampleNumber.toPrecision(2)); // returned 1.2e+2
console.log(sampleNumber.toPrecision(1)); // returned 1e+2

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //returned 10,00,000  the commas are applied as per indian standards.

// number is a datatype.
console.log(Number.MAX_VALUE); // returned 1.7976931348623157e+308 
// similarly there are many options available.


/*  
*********************************************Maths**************************************************************************************
Maths library is included in javascript by default.
syntax is Math  "M" is capital
abs is absolute value
*/

console.log(Math);
console.log(Math.abs(-9)); // returned 9
console.log(Math.round(9.876)); // returned 10 it basically rounded off to nearest value.
// if you give .5 then it will round up or down based on the next digit
console.log(Math.ceil(9.1)); //returned 10 as it is taking ceeling value. 
console.log(Math.floor(9.1)); // return 9 because floor function

const min = 10
const max = 9
console.log(Math.floor(Math.random() *  (max - min + 1)) + min);  //this generates random numbers between min and max.

