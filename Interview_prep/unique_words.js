
// To check if string has unique characters in it or no:
// function isUnique(str){

// for(let i=0;i<str.length;i++){

//     if(str.lastIndexOf(str[i])!== i ){
//         console.log(` ${str} has same characters in it `)
//     return   
//     } 
// }
// console.log(`All characters are unique in ${str}`)
// }
// isUnique("hello");
// isUnique("ASDFG");
// isUnique("Harman");



// to solve it with time complexity:
// lets first sort our string then 
let str= "abah"
let sortStr=str.split('').sort()
// now lets see if this one has duplicate elements:
for(let i=0;i<sortStr.length;i++){
 if(sortStr[i+1]==sortStr[i]){
    console.log(`  has same characters in it `)
   return  
 }
 
 


}
console.log(`All characters are unique in `)
