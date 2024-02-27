// all about converting basics s
 let score = 1111 ;

 console.log(typeof  score);//number

 console.log(typeof(score));// also number , but just diifrent way to write  it 

 //converting value into number , 
 let valueInNumber = Number(score) ;
 console.log( typeof (valueInNumber)) ;// now the type is number

// "33"= easily conv to number 
//  "John Doe" = not easy to convert
// "33abc" = NaN (not a number ) 
// true= 1 , false=0 
// null=0
// undefined = NaN


/* 
CONVERSION OF BOOLEAN 
*/
let isLoggedIn= "Harman" 
 
let booleanIsLoggedIn=  Boolean(isLoggedIn)    
console.log(booleanIsLoggedIn );//true   because in JS anything except for null,undefined and 0 are treated as
// 1: true , 0:false
// "":false
//"Harman":true

//********************************************OPERATIONS*************************************************
let value = 3 ;
let negValue = -value;
console.log(negValue); // output:-3

let str1 = "Hi" ;
let str2 = " Hello";
let str3 = str1 + str2 ; //output : Hi Hello




