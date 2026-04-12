const account_id=14432
let account_email="ayush@gmail.com"
var account_password="12345"
account_city="raipur"

// account_id=2

account_email="hc@example.com"
account_password="4321"
account_city="japur"
/*
    prefer not to use var
    bacause  of issue in block scope and functional scrope
*/

console.log(account_id);

console.table([account_email,account_password,account_city]);
