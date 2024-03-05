const userEmail = "srujan@email.com"

if (userEmail) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}  because we wrote 0 and false in string so it is true whatever in string it is true

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {   // to check we have to give a condition === 0   to check object we need tpo use object.keys
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null  and  undefined

let val1;
// val1 = 5 ?? 10  // whichever value is first, that is assigned
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

const result = a ?? b;
// If a is null or undefined, result will be assigned the value of b.
// If a is neither null nor undefined, result will be assigned the value of a.



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")