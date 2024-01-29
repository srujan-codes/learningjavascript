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
// **************************************************** Operations *****************************************************************
let value = 3 
let negValue = -value
console.log(negValue)
  // Arithmetic Operations
  console.log(2+2);
  console.log(3-2);
  console.log(2*2);
  console.log(2**3); // ** is used for 2^3
  console.log(3/2);
  console.log(2%3);  // % to find remainder
  let str1 = "hello"
  let str2 = " srujan "
  let str3 = str1 + str2

  console.log(str3)   // returned hello srujan
  console.log("1"+ 2) //  it will return 12 because of type conversion
  console.log(1 + "2") // here also the same as above
  console.log("1" + 2 + 2 ) // returned 122  because of type conversion
  console.log(1 + 2 + "2") // returned 32 (first it did 1+2=>3) then converted it to a string and added both strings.
  // string at end so it performed arithmetic operations and then joined strings at the end.
  // if string is in the beginning then everything is treated as string
  
  console.log(true) // returned true
  console.log(+true) // returned 1 as it converted boolean to number.
 // console.log(true+) // error
let counter = 100
counter++;
console.log(counter); // returned 101 basically increment.
++counter;
console.log(counter) 
/*
++a is prefix operator here the increment operator increments and returns value after incrementing.
a++ is a postfix operator here  the increment operator returns value before incrementing.
*/