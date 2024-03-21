let person={ 
    name:'Harman' ,
    price:299,
    welcomeMessage:function(){
       //console.log(`${this.name} , welcome`)
        //console.log(this) // this is pointing to the object itself not window or undefined
    }

}
person.welcomeMessage();
 //console.log(person.price);
// console.log(this) //empty  object in this case

 // this Keyword in functions:

 // 1. in simple function:NOT WORKING 
 function test1(){
    let username="Gale" 
    //console.log(this.username)  //output:undefined  no value  found
    //console.log(this) // long list of sone values
 }
 //test1();


 //2.function with variables:NOT WORKING

 let test2 = function(){
    let username="hen" 
    //console.log(this.username)  //output:undefined  no value  found
    //console.log(this) // long list of sone values
 }
//test2();
 
//3. Arrow Functions : NOT WORKING
let test3= () => {
    let username="Cow" 
    //console.log(this.username)  //output:undefined
   //console.log(this) // Output:{}

}
//test3();



// In Depth About ARROW FUNCTION:

//Simple Arrow function or EXPLICIT RETURN ARROW FNT:
let  arrowFunction= () =>
{
    return ("I am an arrow  function");

}
//console.log(arrowFunction());

// IMPLICIT  Return Arrow fnt:

//let implicitArrowFnt= (a,b) => a+b; // in this we dont use {} and return  so js will automatically return the last line of code

// We can also do fw:
let implicitArrowFnt= (a,b) => (a+b); //  it will return a+b; in this we also dont need to return  anything explicitly

//console.log(implicitArrowFnt(2,1)); //output:3


// Objects in Explicit Return Arrow function:

let objExplicitFunc=() =>
( {name:'Hero',
age:90,
gender:'Female' ,
Spritual:'NO'
} );

//console.log(objExplicitFunc().age) ; // 90



// Arrays in Explicit Return Arrow function:

let arrExplicitFunc = () => ['Hen', 'Tom','Jerry'];

console.log(arrExplicitFunc()[8]); // Jerry