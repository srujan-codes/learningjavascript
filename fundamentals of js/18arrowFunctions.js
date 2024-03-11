// "This" keyword ==>  used to refer current object 

const user = {
    username: "srujan",
    price: 888,

    welcomemessage: function() {
        console.log(`${this.username} , welcome to website `) // now to refer current context we use "this keyword"
    }
}

user.welcomemessage()
user.username = "sam"
user.welcomemessage() // this will get executed because we use this keyword and it refers to current context here the context was changed to sam so it is getting executed.
// basically this talks about current context (variables)

//console.log(this); // returned {} (empty object) 

//function chai() {
  //  let nameOfUser = "srujan"
   // console.log(this);
   // console.log(this.nameOfUser); // returned undefined because"this" works in objects and not functions 


//chai(); // when we printed "this" in a function i.e node environment we got may things in console.

const chai =  () => {
    let nameOfUser = "srujan"      // () => {} this is arrow function
        console.log(this.nameOfUser); // returned undefined
    }

    chai()

    const addTwo = (num1, num2) => {  // if we use curly braces, then we must use return keyword but if we go for parantheses then it is not needed.
        return num1 + num2
    }

    console.log(addTwo(3,4)); // 7

    const addThree = (num1, num2, num3) => (num1+num2+num3) // we did not use curly braces so implicit of return need not use return keyword

    console.log(addThree(3,4,1)); //8