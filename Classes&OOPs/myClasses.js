// class User{
//      constructor (userName, age, password){
//         this.userName=userName;
//         this.age=age;
//         this.password=password ;

//      }
//      encryptPassword(){
//         return `${this.password}word`

//      }
//      changeUserName(){
//         return `${this.userName.toUpperCase()}` 
//      }


// }
// const user1= new User( "John", 25 , 'pass');
// console.log(user1.encryptPassword());
// console.log(user1.changeUserName());




// USING FUNCTIONS :
function User2(userName, age, password){
        this.userName=userName;
        this.age=age;
        this.password=password ;


}

User2.prototype.encryptPassword=function(){
    return `${this.password}word`

}

User2.prototype.changeUserName=function(){
    return `${this.userName.toUpperCase()}` 
    
}

const user2= new User2("Jane",30,'secret') ;
console.log(user2.encryptPassword()) // secretword
console.log(user2.changeUserName())