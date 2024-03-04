console.log("s");
console.log("r");
console.log("u");
console.log("j");
console.log("a");
console.log("n");

// instead of this we can do this using a function

function sayMyName(){
    console.log("s");
    console.log("r");
    console.log("u");
    console.log("j");
    console.log("a");
    console.log("n");

}

// function reference will be sayMyName
sayMyName()   // calling the function by referencing its name

/*function addTwoNumbers (number1, number2){
    console.log(number1 + number2);

} */
 //addTwoNumbers() // returned NaN (Not A Number) because we haven't given any agument
 //addTwoNumbers(3,8) // returned 11   // things inside  () are called arguments
// addTwoNumbers(3,"8") // returned 38 because it assumed 3 also as a string
 //addTwoNumbers(3,"a") // returned 3a
 


function addTwoNumbers (number1, number2){
    //let result = number1 + number2
   // return result  // after return function, whatever there in the function won't get executed. after return ,function will not work.node 
return number1+number2 // can also be done
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result); // returned 8 

function loginUserMessage(username = "srujan"){ // here srujan is default value . We've assigned default value
    if(username === undefined){   // here we could also use !username and we did this so we did not want to leave it to be undefined    
        console.log("Please enter your username.")
        return

    }
    return `${username}  is logged in.`    // (``)==>String interpolation back ticks is used 
}



//console.log(loginUserMessage("srujan")) // returned srujan  is logged in.
//console.log(loginUserMessage("")) // returned  is logged in. in the case of empty string
console.log(loginUserMessage()) // returned undefined  is logged in. because we did not pass any command


// empty string and undefined are by default fault values or false


/*
Interpolation of variables refers to the process of embedding variable values directly into a string, 
typically within template literals in JavaScript, using placeholders like ${variable}. 
This allows for dynamic content generation within strings without the need for cumbersome concatenation or string manipulation.
 */