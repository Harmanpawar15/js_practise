// objects continued:

//Sigelton objects:
//const singelton_obj=new Object(); // object  with no properties, so it's a Singleton.or we can say its creted as constructor

// Non Singelton Object:
const person = { 
    email:"email@gmail.com" ,
    age:66 ,
    isLoggedIn:false,
    name:{
        fullname:{
            firstName:"Harman" ,
            lastName:"Pawar"                                                 // nested object eg , object in object
        }
    }
}

console.log(person.name?.fullname.lastName);      // how to acess , nested object  property , put ? to check if we have object with that name 
// if we dnt have that object property its gonna return undefined  

// Some other objects properties:
 const obj1={1:"hi",2:"hlo"} 
 const obj2={3:"hi",4:"hlo"}
 const obj3={5:"hi",6:"hlo"}

// if i want to join these objcts and form one obj i can use assign or spread operator:
const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4);

// or using spread operator :
const obj5={...obj1, ...obj2, ...obj3};
console.log(obj5);
 
// array of objects:

const arrayObj=[
   {
    id:1,
    name:"harry"
   } ,
   {} ,
   {} ,

]
// to acess array of obj:
console.log(arrayObj[0].name);    // important


// few  methods for working objects in js:
console.log(person);                      // will print the whole person object
// to print keys of person object

console.log(Object.keys(person));         // will print all the key names present in the person object

console.log(Object.values(person));       // will print all the values of the person object

// Object.entries() returns an array of [key,value] pairs   
console.log(Object.entries(person));

console.log(person.hasOwnProperty("age"));     // it will return true if property exist otherwise false


// destructring objects :

const course={
    title:"js",
    duration:"6 months",
    level:"intermediate" ,
    instructor:"Harman"
}

// method to destructring object:
const {instructor:proffesor} = course ; // instructors is key of object and course is name of object  , you can give  or change 
// name of  variable but not the key's name because it should be same as key's name in object.
// here in above proffesor is reference of name given to key level

console.log(proffesor);        // output : intermediate