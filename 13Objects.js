// Singleton
// Object.create
// Object literals

// Defining a symbol
const mySym = Symbol("key1");

// Creating an object literal
const JsUser = {
    name: "Srujan",
    "full name": "Srujan Vooturi",
    [mySym]: "mykey1",
    age: 18,
    location: "Noida",
    email: "srujan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// Modifying a property
JsUser.email = "srujan@chatgpt.com"; // Changing the email property

// Attempting to freeze the object
// Object.freeze(JsUser); // Commented out as it causes an error in the next line

// Trying to modify a frozen object (will throw an error if Object.freeze is uncommented)
JsUser.email = "srujan@microsoft.com";

// Defining methods on the object
JsUser.greeting = function() {
    console.log("Hello JS user");
};
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

// Calling the defined methods
console.log(JsUser.greeting()); // Logging the return value of the function, which is undefined
console.log(JsUser.greetingTwo()); // Logging the return value of the function, which is undefined

// Logging the value of the "email" property
console.log(JsUser["email"]); // returned the necessary info which is hitesh@chatgpt.com
// We have to use double quotes so that data can be retrieved from a string













//************************************************************Objects */****************************************************************

/*
 singleton------> to be used when we make from constructor
Object.create
 object literals-------> declaring object
 Objects are key value pairs
 Key - Property Name (A label given to data)
 Value - Data stored in that property
 objects are dynaimcally sized and can grow as needed
 we cannot re-declare a constant variable

*/




const appUser1 = {}

appUser1.id = "123abc"
appUser1.name = "Sammy"
appUser1.isLoggedIn = false

 console.log(appUser1);

const appUser2 = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "srujan",
            lastname: "vooturi"
        }
    }
}

console.log(appUser2.fullname.userfullname.firstname); // returned  fullname: { userfullname: { firstname: 'srujan', lastname: 'vooturi' } }

console.log(appUser1); //returned empty object {}
console.log(appUser2); //returned empty object {}

// combining objects

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

//const obj3 = {obj1, obj2} // object is there inside object
//const obj3 = Object.assign(obj1, obj2)
//console.log(obj3);  // returned { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }in prev case
// after doing object.assign it returned { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//const obj3 = Object.assign(obj1, obj2)

//const obj4 = {...JsUser.obj1, ...obj2}  // we used "..."  for spreading the properties of obj1 and then followed by obj2
//console.log(obj4);

let obj4 = Object.assign({}, obj1, obj2)
console.log( obj4);

// whenever we het data from database, 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(appUser1);
console.log(Object.keys(appUser1)); // this will give all the keys hence returned [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(appUser1)); //  this will give all the values hence returned [ '123abc', 'Sammy', false ]
console.log(Object.entries(appUser1));// transforms  the user into an array of key value pairs [[key,value]] returned [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] prop 1 is key and prop 2 is value
console.log(appUser1.hasOwnProperty('isLoggedIn')); // returned true

