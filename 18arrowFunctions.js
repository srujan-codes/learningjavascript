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
user.welcomemessage() // this will get executed because we use this keyword and it refers to current context here the context was changed to sam so it is getting executed