class User{
    constructor (userName)
    {
        this.userName=userName
    }
    logMe(){
        console.log(this.userName)
    }

    
}
class User2 extends User {
    constructor(userName,age,course){
        super(userName)
        this.age=age
        this.course=course
}
study(){
    console.log(`${this.userName} completed ${this.course}`)
}
Myage(){
    console.log(`${this.userName} age is : ${this.age} `)
}

}


let user1= new User2("Maria" , 44 , "Javascript")
user1.Myage();
user1.study();
user1.logMe()
//console.log(user1.study());
//console.log(user1.age());
//console.log(user1.logMe());