// All about Numbers:
// 1. Number type in JavaScript is a primitive data type, not an object like String or Boolean.
const score=400 ; // without mentioning we know data type of score is number 
//console.log(typeof score); // Output : number

// but we can predefine that we neeed it as number inorder to do so we can :
const balance =  new Number (299) ; //if we define like this than data type of balance is gonna be number by default 


// few properties of numbers
/*
constructor: f Number ()
• toExponential: f toExponential ()
• toFixed: f toFixed()
• toLocaleString: f toLocaleString()
• toPrecision: f toPrecision ()
• tosthina:
toString()
• valuef: f valueOf()

*/
//toString
console.log(balance.toString) //  Output : covert number data type to string , plus we can use string properties after coverting it to string 

//toFixed:
console.log(balance.toFixed(2)) // Output:299.00 , it will put two decimal poimts at the back

//toPrecision:means i need precise value , with value given , how long i want 
const nextNum = 279.777685

console.log(nextNum.toPrecision(3)); //Output: 29.8

//toLocalString : make the given value to local string , acc to US standard


 
// **************************************MATHS*************************************************************

 //math is libarry of js 

 console. log (Math);
console. log (Math.abs (-4)); // Output: 4 because abs function return positive values from negative
console. log (Math. round (4.6));  //  Output: 4 becoz it rounds up the value if .5 present then it goes up otherwise down 
console. log (Math.ceil(4.2)); //  Output: 5 because ceil round up if .5up then +ve else -ve
console. log (Math.floor (4.9)); //  Output: 4 because floor rounds down if .5down then +ve else -ve

// Math.random:generate random number btwn 0-1, mostly deciml

console.log(Math.random()); 

console.log(Math.random() * 10) // by multiplying value after 0 will be shifted and output will be moved from decimal to full number 

console.log((Math.random()*10 ) + 1) // by adding 1 we will make sure we wont get 0 number , we are omitting chances of 0 

// IMPORTANT FORMULA
// if we want random number between particular nurbers:

const min = 5 ;
const max = 10 ; 

console.log(Math.floor( Math.random() * (max - min + 1)) + min)

// floor:to get single digit value ,after decimal 
// +1 :because range should be above 0 
// + min : to get value starting from minimum value 




 