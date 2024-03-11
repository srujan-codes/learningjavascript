console.log(2 > 1); //returned  true
console.log(2 >= 1); //returned true 
console.log(2 < 1); //returned  false
console.log(2 == 1); //returned  false
console.log(2 != 1); //returned  true     "!=" => not equals to



console.log("2" > 1); // here 2 is a string
console.log(null > 0);  ////returned  false
console.log(null == 0); // //returned  false
console.log(null >= 0); // //returned  true   here null got converted to 



console.log(undefined == 0); 
console.log(undefined > 0);         // returned false for all 3 cases.
console.log(undefined < 0);

// "===" triple equal to checks the value and also data type.
console.log("2" === 2)  // returned false



/* 
   Summary
   Try to avoid comparing 2 different data types, if we compare also we may not get predictable output.
*/