/*
function calculateCartPrice(num1){
return num1
}

console.log(calculateCartPrice(2)) // 2 is returned 
*/

function calculateCartPrice(...num1){ // here this ... is rest or spread operator depending upon use case
    return num1                           // ... will convert to array
    }
    
    console.log(calculateCartPrice(200, 400, 500, 1234, 77777, 65432)) // full values are is returned 


    const user = {
        username: "srujan",
        prices: 199
    }
    
    function handleObject(anyobject){  // here anyobject is parameter so that we can pass any object later in time
        console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // bactick ==> instant string
    }
     
//handleObject(user) // returned username is srujan and price is undefined.
// this is not a good way to handle objects  as it returns all the properties of object instead of  specific one.


const mynewarray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1] // [1] returns the second value (0,1,2,3,..........n)
}

console.log(returnSecondValue(mynewarray)) // returned 400  which is at index 1 in array so basically second value.