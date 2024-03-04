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
