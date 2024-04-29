class user {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    static  uniqueCode(){
        
        return parseInt(Math.random() * 100) + 1;

    }
}

let user1= new user("John", 25);
//console.log(user1.uniqueCode());// error  because it is a static method and can't be accessed through an instance of the object.
// To access a static method in a class, you don't call it on an instance of the class (like user1.uniqueCode()),
// but rather directly on the class itself. Here's how you can access the uniqueCode static method:
console.log(user.uniqueCode());