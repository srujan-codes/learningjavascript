// Creating an array
let fruits = ['apple', 'banana', 'orange', 'grape'];

// 1. push(): Adds one or more elements to the end of an array
fruits.push('kiwi');
// Result: fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi']

// 2. pop(): Removes the last element from an array and returns it
let lastFruit = fruits.pop();
// Result: lastFruit = 'kiwi', fruits = ['apple', 'banana', 'orange', 'grape']

// 3. shift(): Removes the first element from an array and returns it
let firstFruit = fruits.shift();
// Result: firstFruit = 'apple', fruits = ['banana', 'orange', 'grape']

// 4. unshift(): Adds one or more elements to the beginning of an array
fruits.unshift('melon', 'peach');
// Result: fruits = ['melon', 'peach', 'banana', 'orange', 'grape']

// 5. concat(): Combines two or more arrays
let moreFruits = ['kiwi', 'strawberry'];
let combined = fruits.concat(moreFruits);
// Result: combined = ['melon', 'peach', 'banana', 'orange', 'grape', 'kiwi', 'strawberry']

// 6. slice(): Extracts a section of an array and returns a new array
let selectedFruits = combined.slice(2, 5);
// Result: selectedFruits = ['banana', 'orange', 'grape']

// 7. splice(): Changes the contents of an array by removing or replacing elements and/or adding new elements
combined.splice(2, 2, 'blueberry', 'watermelon');
// Result: combined = ['melon', 'peach', 'blueberry', 'watermelon', 'grape', 'kiwi', 'strawberry']

// 8. indexOf(): Returns the first index at which a given element is found in the array, or -1 if not present
let indexOfGrape = combined.indexOf('grape');
// Result: indexOfGrape = 4

// 9. lastIndexOf(): Returns the last index at which a given element is found in the array, or -1 if not present
let lastIndexOfWatermelon = combined.lastIndexOf('watermelon');
// Result: lastIndexOfWatermelon = 3

// 10. includes(): Determines whether an array includes a certain element, returning true or false
let includesBanana = combined.includes('banana');
// Result: includesBanana = false

// 11. join(): Joins all elements of an array into a string
let fruitString = combined.join(', ');
// Result: fruitString = 'melon, peach, blueberry, watermelon, grape, kiwi, strawberry'

// 12. reverse(): Reverses the elements of an array in place
combined.reverse();
// Result: combined = ['strawberry', 'kiwi', 'grape', 'watermelon', 'blueberry', 'peach', 'melon']

// 13. sort(): Sorts the elements of an array in place
combined.sort();
// Result: combined = ['blueberry', 'grape', 'kiwi', 'melon', 'peach', 'strawberry', 'watermelon']

// 14. filter(): Creates a new array with all elements that pass the test provided by a function
let filteredFruits = combined.filter(fruit => fruit.length > 5);
// Result: filteredFruits = ['blueberry', 'watermelon', 'strawberry']

// 15. map(): Creates a new array with the results of calling a provided function on every element in the array
let fruitLengths = combined.map(fruit => fruit.length);
// Result: fruitLengths = [9, 5, 4, 5, 5, 10, 9]

// 16. forEach(): Executes a provided function once for each array element
combined.forEach(fruit => console.log(fruit));
// Result: Logs each fruit in the array

// 17. every(): Tests whether all elements in the array pass the provided function
let allFruitsHaveFiveChars = combined.every(fruit => fruit.length === 5);
// Result: allFruitsHaveFiveChars = false

// 18. some(): Tests whether at least one element in the array passes the provided function
let someFruitsHaveFiveChars = combined.some(fruit => fruit.length === 5);
// Result: someFruitsHaveFiveChars = true

// 19. reduce(): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
let totalLength = combined.reduce((acc, fruit) => acc + fruit.length, 0);
// Result: totalLength = 47

// 20. find(): Returns the first element in the array that satisfies the provided testing function
let firstLongFruit = combined.find(fruit => fruit.length > 6);
// Result: firstLongFruit = 'blueberry'

// 21. findIndex(): Returns the index of the first element in the array that satisfies the provided testing function, or -1 if not found
let indexFirstLongFruit = combined.findIndex(fruit => fruit.length > 6);
// Result: indexFirstLongFruit = 0 (index of 'blueberry')

// 22. fill(): Fills all the elements of an array from a start index to an end index with a static value
let filledArray = new Array(5).fill('apple');
// Result: filledArray = ['apple', 'apple', 'apple', 'apple', 'apple']
