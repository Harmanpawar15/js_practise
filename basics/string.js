//All about strings and its methods :

const name= "Harman"
const repo= 10 

// concat using primitive method , not used anymore 
console.log(name + ' has '+repo+' repositories');

// template literals are the best way to use string in javascript
// we can add variable inside it by ${    
        console.log(`Repo by ${name}, are ${repo}`) ;

        //STRING METHODS:

        //lastIndexOf:Returns the index of the last occurrence of the specified substring within the string, or -1 if not found.
        console.log(`For last index of ${name},is:${name.lastIndexOf("r")}`) 

        //String.prototype.includes():The includes() method of String values performs a case-sensitive search to 
        //determine whether a given string may be found within this string, returning true or false as appropriate.

