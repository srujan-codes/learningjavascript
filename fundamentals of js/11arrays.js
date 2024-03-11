//******************************************************Arrays**********************************************************
// array is an object and is a collection of multiple items in a single variable.
//written in square brackets
// it can be modified.

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0]) //    returned 0.  to acces any value, we need to use indexing. Index starts from 0 

const myArr2 = new Array(1,2,3,4,5,6,7)
console.log(myArr2[3]); // returned 4

//**************************************************************Array Methods******************************************************* */
myArr.push(6)
console.log(myArr); // returned [0, 1, 2, 3,  4, 5, 6 ] earlier the array was [0, 1, 2, 3, 4, 5].

myArr.push("Srujan")
console.log(myArr); // returned [ 0, 1, 2, 3, 4, 5, 6, 'Srujan' ] earlier the array was [0, 1, 2, 3,  4, 5, 6 ]

myArr.pop()  // removes last value in array 
console.log(myArr); // returned [0, 1, 2, 3,  4, 5, 6 ]

myArr.unshift(8)
console.log(myArr)  // returned [ 8, 0, 1, 2, 3, 4, 5, 6] Pushed in the starting of array.

myArr.shift()
console.log(myArr)  // returned normal original array.

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // here array is also considered as a single datatype. so it pushed dc heroes into marvel heroes.

 console.log(marvel_heros);
 console.log(marvel_heros[3][1]); // returned flash

 