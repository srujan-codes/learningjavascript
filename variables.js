const accountId = 1234
let accountEmail = "srujan@gmail.com"
var accountPassword = "password"
accountCity = "Hyderabad"
//accountId = 1 we cannot change value of const as we've aldready declared accountId in line 1
console.log(accountId);
console.log(accountEmail);
console.log(accountCity);
console.log(accountPassword);
accountEmail = "srujan2@gmail.com"
accountPassword = "password2"
accountCity = "Bangalore"
console.table([accountEmail,accountPassword,accountId,accountPassword,accountCity])
/*
prefer not to use var because of issue in block scope and functional scope
Q: what is block scope?
A: Block scope is often used in conditional statements and loops to control the scope of variables.
Q: what is functional scope?
A: Variables that are declared inside a function are called local variables and in the function scope.
To declare constant we have to use command const keyword followed by variable name.
We can declare it only once and connot modify it later.
To declare variables we have 2 options "let" and var" 
- let : It has block scope which means if you declare a variable using let inside an if.
so we prefer let and try not to use var.
If we declare a variable and leave it or do not assign any value then it will be undefined.
*/