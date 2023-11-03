const accountId = 1445598
let accountEmail = "deveshgar@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@dev"
accountPassword = "214589"
accountCity = "Haridwar"

console.log(accountId);

/*
Prefer not use var because of issuse in block and functional scope 
*/

console.table([accountEmail,accountId,accountPassword,accountCity, accountState])