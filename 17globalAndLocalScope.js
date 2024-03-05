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
    console.log("BlockScope: ", a); // returned 10
    // variable inside scope should not go out
}

console.log(a); 

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
