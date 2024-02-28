//basic functinlly of stack and heap 
//stack for primitive data types , heap for non primitive data type  like array or object.
// stack creates copies , whereas heap use reference  to the actual value .
//simple example to understand this all 

//STACK
let myName="John Doe";
let anotherName=myName ;
anotherName="Harman"

console.log(myName);   //output : John Doe
console.log(anotherName)    // output: Harman    , in here it changes copy not real value which was John dee


//HEAP
let userOne= {
    userName:"Lavanya " ,
    age:24
}
let userTwo =userOne;
userTwo.age=44 ;
console.log(userOne.age); //output:44
console.log(userTwo.age); //output:44

// in this both values are same bcuz we use reference  to the actual value so any change reflects on that major variable 
// and reflected on all output