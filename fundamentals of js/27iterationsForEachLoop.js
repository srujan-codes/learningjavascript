// for each loop 
// mostly used with arrays

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function greet (val) {
    console.log(val); // it printed the aray
})


coding.forEach( (item) => {
    console.log(item); // arrow function is shorter way to write this function
}) // basic call back function

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )