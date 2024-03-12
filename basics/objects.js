// all about objects and how to declare:

// OBJECT LITERALS: 
// object properties type is string , value can be any data type.

// lets use symbol:
const firstSymbol= Symbol("first"); // declaration of symbol

const firstObject={
name:"Harman" ,
age:26 ,
[firstSymbol]:"I am Harman" , // this is symbol, if you dont put braces , it will return undefined 
profession : "Software Developer",
isMarried : false,

}

console.log(firstObject.profession) ; // way to  access the property of an object ,but this aint right way

// right way:

console.log(firstObject["profession"]) ; // using brackets for accessing property

// symbol acess:
console.log(firstObject[firstSymbol]) 

firstObject.profession="Model" ; // in this we change value of proffsion
console.log(firstObject["profession"]);
// we can freeze objct too , to avoid further chnages:
//Object.freeze(firstObject);
firstObject.profession = "Engineer";  // now it will give error because its frozen
firstObject.profession="Daughter" ;
console.log(firstObject);


// Functions and objects:
firstObject.functionOne = function() {
    console.log("This is function one") ;
}
console.log(firstObject.functionOne()); // calling the function with use of object

// way 2:

firstObject.functionTwo= function() {
    console.log(`Hi, welcome ${this.name}`) ; // reffering object property in function
}

console.log(firstObject.functionTwo());

