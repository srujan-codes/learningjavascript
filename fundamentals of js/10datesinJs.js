// Dates.
// here date is an object.
let myDate = new Date()
console.log(myDate.toString()); // returned Wed Jan 31 2024 18:09:38 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // returned Wed Jan 31 2024   Todate string returns date as string value.
console.log(myDate.toLocaleString()); // returned 31/1/2024, 6:23:59 pm
console.log(typeof myDate); // returned type as object

let myCreatedDate = new Date(2023, 0, 23) // arbitrary date
console.log(myCreatedDate); //returned 2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toDateString()); // returned Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString()); // returned 23/1/2023, 12:00:00 am
// In javascript, Months start from 0 so 0 is january. only in arrays but if we use dd mm yy format we have to start from 1.

















/*JavaScript Date objects represent a single moment in time in a platform-independent format.Date objects encapsulate an 
integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch). 
Date is calculated in milli-seconds.
Date-Object Model.

*/