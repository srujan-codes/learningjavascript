// let var and const 

/*let a = 10
const b = 20
var c = 30*/

// {} is scope when it is with function or if else commands
let a = 300        // global scope 
if(true){
    let a = 10        // here a is in block scope                             // thing written inside curly braces is block scope
    const b = 20
    var c = 30
   // console.log("BlockScope: ", a); // returned 10
    // variable inside scope should not go out
}

//console.log(a); 

/*
              Block Scope 
    let and const provide block scope in javascript.
     Variables declared inside a { } block cannot be accessed from outside the block.       
     variables declared with the "var" keyword can NOT have block scope.   
     Variables declared inside a { } block can be accessed from outside the block.

              Local Scope
    Variables declared within a JavaScript function, are LOCAL to the function
    // code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
Local variables are created when a function starts, and deleted when the function is completed.

                   Global JavaScript Variables
A variable declared outside a function, becomes GLOBAL.
*/
 
/*
 ************************Nested Scope*******************************************
*/

function one(){
  const username = "srujan"

  function two(){
    const website = "github"
    console.log(username)   // this got ececuted and returned "srujan"  // we r doing this to check  if nested functions can access outer scope's variables or not
  }
  //console.log(website) // we cannot access it here as it can't be accessed  because it is nested inside another function
  // because we got error in this line, the execution is stopped as it follows line by line 
  

  two() 

}

 //one()

 if (true) {
  const username = "srujan"
  if(username === "srujan"){
    const website = "github"
    console.log(username + website); // this is executed successfully
  }
 // console.log(website); // this cannot be accesed as website's scope is limited to the nested function
 }
 
 //console.log(website); // this cannot be accessed as there is no scope 




 /*  Example */
console.log( addOne(5)) // returned 6 
console.log( addTwo(5)) // returns error because addTwo is not accesibble here.
 function addOne(num){
  return num + 1 
 }

 addOne(5)


 const addTwo  = function(num){
  return num + 2
 }

 addTwo(5)