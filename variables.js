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