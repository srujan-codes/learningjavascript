let score = "33"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)  // we've converted string to number
console.log(typeof valueInNumber);
console.log(valueInNumber)

/*
Sumary
In java Script try not to rely on numbers.
Because if the input is a non-numeric character, it will return NaN (Not a Number) type of NaN is a number only.
Null value is onverted to 0
undefined is converted to NaN
boolean is converted to 0 or 1 True=>1 False=>0
*/