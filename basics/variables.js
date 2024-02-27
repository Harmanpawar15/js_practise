
// different type of keywords used for declaration in js , with their usasge 

const accountId=12345;   // value remains constant , never be changed 
let accountEmail="harman@google.com" ;            // can change the value after initialization 
var accountPassword="1234"                      //can change value after intialization
accountCity="New York";        // same goes for this tooo
let accountState; s// output:undefined  ,  bcus value is not assigened yets

//accountId=3; not allowed , goin to give error
console.log(accountId);     // output : 12345

// let and const are block scoped , meaning they only available within the curly braces where it is declared .console.log(accountEmail)    //outputconsole.log("Account Email is: ",accountconsole.log(accountEmail)    //output
accountEmail="Hp@gmail.com"
accountPassword="1212"
accountCity="Toronto"

console.log(accountEmail)    //output: harman@
// If we have many variables declared , we cant print each for values , its gonna take alot , so we can use tables to get result in one go 

console.table([accountEmail,accountPassword,accountCity,accountState]); 


// IMPORTANT NOTE:
// Avoid using  "var", instead use "let" and "const". Because var has  no block scope it will give furture problems , so instead of that use LET , CONST to avoid future errors , because incase you will redelare variable in any other file it will overwrite 
// the value and cause chaos. Issue in block scope and functional scope 