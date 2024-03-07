let arr = [45, 23, 21]
// Array map method
let a = arr.map((value, index, array) => {
  // console.log(value, index, array)
  return value + index
})
// console.log(arr)

// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
  return a < 10
})
// console.log(a2, arr2)



// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)


const coding = ["js", "ruby", "java", "python", "cpp"]


 const values = coding.forEach( (item) => {
    console.log(item);
   return item
} )

//console.log(values);  // we got undefined so we need to retuen


/*const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const newNums = myNums.filter( (num) => { // if we use curly braces we must use return keyword because we have opened a scope
   return num > 4            // in filter it will have acces to all elements and whatever will satisfy it will be returned
 } )
 console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]*/



 const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 ) // this result will be passed on to the second map
                .map( (num) => num + 1)                                // chaining method
                .filter( (num) => num >= 40)

console.log(newNums);

// reduce 

const myNums1 = [1, 2, 3]

/*const myTotal = myNums1.reduce(function (accumulator, currval) {
    console.log(`acc: ${accumulator} and currval: ${currval}`);
    return accumulator + currval
}, 0) // whatever value after , is there that will be fed in the accumulator

console.log(myTotal);*/

const myTotal = myNums1.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);




const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "app dev course",
      price: 5999
  },
  {
      itemName: "data structures course",
      price: 12999
  },
]

// we want to add all the prices in shopping cart so we will use reduce function

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

