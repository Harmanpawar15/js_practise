
// OBJECT LITERALS:

const user = {
    username: "harman", loginCount: 8, signedIn: true ,

   getUserDetail: function (){
    //console.log("got Detail")
    //console.log(`UserName:${user.username}`) // undefined  -> this keyword refers to the object on which method;
    //console.log(`UserName:${this.username}`)
    console.log(this) //  this refers to the object on which method is called

    }
}
//console.log(user.username);
//console.log(user.getUserDetail());
//console.log(this) // return  empty object  because it's not bound with any particular object


// Constructor Funcction : new & this 

function userDetail (name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;
 // by using both names same we are creating insttance and pushing it to empty object using this  keyword

 return this // will return this : object with data in it 
}
//let userOne=userDetail("Maria",22,"North York") ;
//console.log(userOne);  // this will print the data but with whole other actual object data that this has

// whatif we want to cretae one more user:
//let userTwo=userDetail("John",34,"Toronto");
//console.log(userTwo);  // this will override the value  of userOne as they have same property name so it just overrides the value

// to prevent overriding and to cfreate seprate copy we use NEW keyword and to avoid excessive data to come in our output:
let userOne= new userDetail("Maria",22,"North York") ;
let userTwo= new userDetail("John",34,"Toronto");
console.log(userOne);
console.log(userTwo);
