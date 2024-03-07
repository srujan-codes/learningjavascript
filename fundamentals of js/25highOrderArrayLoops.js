// for of

// ["", "", ""]  string in array
// [{}, {}, {}]  objects in array
// array specific loops

// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num  of arr) {  // here object is not js object it is the thing that we want to put the loop.
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`)
}

// maps  values should be unique and same order is maintained

const map = new Map()
map.set("In", "India")
map.set("Fr", "France")
map.set("Eu", "Europe")
map.set("USA", "United States Of America")

console.log(map);
/*
returned Map(4) {
  'In' => 'India',
  'Fr' => 'France',
  'Eu' => 'Europe',
  'USA' => 'United States Of America'
}
*/

for (const [key, value] of map) {
    console.log(key, ":-", value)
}
/*
In :- India
Fr :- France
Eu :- Europe
USA :- United States Of America
*/


const myObject = {
    game1: 'NFS',            //  object is not iteratable.
    game2: 'Spiderman'          // some other method is there to iterate objects.
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }