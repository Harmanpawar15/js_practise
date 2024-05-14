
// To check if string has unique characters in it or no:
function isUnique(str){

for(let i=0;i<str.length;i++){

    if(str.lastIndexOf(str[i])!== i ){
        console.log(` ${str} has same characters in it `)
    return   
    } 
}
console.log(`All characters are unique in ${str}`)
}
isUnique("hello");
isUnique("ASDFG");
isUnique("Harman");
