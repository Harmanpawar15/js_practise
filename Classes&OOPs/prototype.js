
let myarray=["apple","banana","spinach"];

let myobj = {
    apple:'fruit' ,
    banana:'fruit' ,
    spinach: 'vegetable',

}


// new object property added:
Object.prototype.newAdd=function (){
    console.log("New Vegetab;e added:Potato ")
}

// lets add new Array property:
Array.prototype.newArr=function(){
    console.log("New array property added") ;
}
// both will be able to acess the  property newAdd () method of Object.prototype
//myarray.newAdd(); 
//myobj.newAdd();

//myarray.newArr(); // this will run and give desired o/p
//myobj.newArr(); // will give error, 




// inheritence using prototypes:

let user= {
    name: "John",
    email:"john@gmail.com"
}

let userDetail={
    city: "London",
    country: "UK"
}

let userJob={
    designation : "Software Engineer",
    company : "Tesla Inc."
}

//  adding properties to user's prototype so that they can access these methods through user obj:

// these are old Synxtax :
//userDetail.__proto__= userJob;
//user.__proto__= userDetail;
//

// Modern Syntax:
// who will inherit come at front other one at bck
//Object.setPrototypeOf(user,userDetail)
//Object.setPrototypeOf(userDetail, userJob)
//console.log(user.city);   // it will show London
//console.log(user.company);  


// lets create a new protoypte that trime the extra space and give you actual length of a string :


let userName="JustLikeMagi!    " 

String.prototype.trimLength= function (){
    console.log(this);
    console.log(this.trim().length);
}
userName.trimLength();
"Harman".trimLength();
"Kurkure  ".trimLength();