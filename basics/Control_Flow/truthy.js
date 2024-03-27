const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// to check if array is empty or not:

let arr=[1,5,8];
//let arr=[]

if(arr.length==0){
    console.log( "Array is Empty");

}
else {
    console.log(`Array is not empty, length of array is ${arr.length}`)

}

// to check if object is empty or not:

let obj={}

if(Object.keys(obj).length===0){
    console.log(`Empty Object`)

}
else{
    console.log(`Object is not  empty`)

}



//Nullish Coalescing Operator (??): null undefined: when we get values from server or databse we dnt know what we are getting so to avoid mess we use this:

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);




// Terniary operator:
// condition ?  exprIfTrue : exprIfFalse ;

// simple example for above expression 
let teaPrice=100;

if (teaPrice > 200 ? console.log("under budget"):console.log(`Out of budget`) );