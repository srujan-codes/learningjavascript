"use strict" // treat all  js code as newer version/new standards
console.log(3+3)
let name = "srujan" // we wrote in double quotes so it is a string.
let age = 20       //  number is the data type here
let isLoggedIn = false  // this is a Boolean data type.
let abc = null
//object  
console.log(typeof age) // returned number.
console.log(typeof abc) // returned object because null is also an object






/*
Summary
We have to maintain code readability. Use proper line spacings.
Now js engines are advanced and it is not mandatory to write "use strict" but it is a good pracice to write.
(js engine is also hidden in the browser) But we use Node js. 
Use MDN docs to refer anything.
Number => range is 2^53 
bigint  => for numbers greater than that
string => "" written inside double quotes
boolean => true/false
null =>   Standalone value. Used when there is no value (like null pointer exception in other languages). It means nothing.
null can also be assigned.
null is also an object.
undefined =>  when variable has no value assigned to it.
symbol => we use them to have some uniqueness.

Object => collection of properties
Property => piece of information about something.
Value => what property holds.
JavaScript variables can also contain many values. Objects are variables too.
 But objects can contain many values. Object values are written as name : value pairs (name and value separated by a colon).
*/