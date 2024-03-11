// IIfe => Immediately Invoked Function Expressions
// we use iife to reduce pollution caused in global scopes

(function chai(){
    console.log(`connected`)
}) (); // also returned connected
//chai() // returned connected

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('srujan')