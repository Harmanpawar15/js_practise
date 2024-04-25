// Is function object tooo?

function random(num){
    return num*5 ;
}

random.user="Harman" ;


//console.log(random(2));  // Output :
//console.log(random.user)// Output:Harman
//console.log(random.prototype); // Output: [object Function]:{}



// in depth about  NEW:

function  Person(name,salary){
    this.name=name;
    this.salary=salary

}

Person.prototype.getSalary=function(){
    this.salary+=100;
    console.log(`Salary: ${this.salary}`);
}

let personOne=  new Person("Harman" , 10) ;
let person2 = Person("Sara",800 ) ;
console.log(personOne)  ;
personOne.getSalary() ;   /*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/