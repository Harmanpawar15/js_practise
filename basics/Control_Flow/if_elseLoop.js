// All about basic of if else and Nested loops:

// If Else is used to check the condition. 
// It has two parts, a condition (boolean expression) and an optional code block that executes when the condition evaluates to true.

//BASIC SYNTAX:
// if(){

// }
// else{

// }

let temperature=12 ;
let person1= "Alice";
let person2="Bob" ;

if(temperature<7){
    console.log(`Hey,${person2}, it too cold out`)
}
else {
    console.log(`Hey ${person1} , lets go out for trekkiing`)
}


// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

// nesting in if else loop with multiple conditions:

let userLoggedIn=true;
let debitCardDetails=true;
let googleLoggedIn=true;
let emailLogged=false;

if (userLoggedIn && debitCardDetails) {
    console.log("Welcome User, you have passesed authtentication")
}
if (googleLoggedIn || emailLogged)
{
    console.log(`You are sucessfully logged INN`)
}
else {
    console.log(`Please login through Google or Email `)
    
}

