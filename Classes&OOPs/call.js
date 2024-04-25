function setUsername(user){
    this.user=user

}

function UserDetail(user,age,gender){
    setUsername.call(this,user); // takes 2 parameters  : this is optinal in CALL  method and user is the parameter passed to call method
    this.age=age;
    this.gender=gender;


}
let UserOne= new UserDetail("Harman" , 25 , "Female")

console.log(UserOne); 
// Without use of Call : no name will be printed because it was never printed  using call or apply methods , only if we use call we will be able to gety this 