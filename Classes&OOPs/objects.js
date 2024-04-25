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
personOne.getSalary() ;   