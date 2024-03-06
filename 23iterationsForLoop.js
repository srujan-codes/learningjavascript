// for loop

/* 
for (let index = 0; index < array.length; index++) {
    const element = array[index];                         structure of for loop
    
}
*/

for (let index = 0; index <= 10; index++) {   // block scope the variables are limited to this function
    const element = index;
    console.log(element);  // printed 1 to 10
}

// we don't have access to element variable outside the loop due to the block scope mechanism

/*
for (let i = 0; i <= 10; i++) {   
    const element = i
    if(element === 5) {
        console.log("5 is the best number");  // we got 0 to 10 then again in between 0 to 10 near 5 
    }
    console.log(element);
}
*/

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

// break and continue

 for (let index = 1; index <= 20; index++) {
     if (index == 5) {
         console.log(`Detected 5`);
         break
     }
    console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}