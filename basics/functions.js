// all dffrnt ways to declare fnts and calling them 

function add(value1, value2){
    let value3= value1 + value2; 
     return  value3; // nothing will be executed after return  statement. 
     // other way to do same :
     // return value1+value2
} 

 let result=add(3,8);
 console.log("The sum is " +result);


// Function to print user name who is logged inn:

function loginUserMessage(userName="Guest"){    // incase , no one one put name , default value will be this 
       if (!userName){        // proffesional way to write if statement , it this is true: no username
    //if(userName===undefined) {
        return 'error'
    }
    else {

    return `${userName},you are sucessfully logged inn :)` ;
    }

}
//loginUserMessage("");
//let user=loginUserMessage('John Doe');
//console.log(user);
console.log(loginUserMessage("hgy"));


//REST OPERATOR:IMP
// Rest Operator:we use it when  we don’t know how many arguments the function will receive.

//function myFunc(...args){   // ...args means that args can contain any number of elements . It will take all the values inside args and return array 

function calculateTotalPrice(num1,num2,...itemPrice)
{
return itemPrice
}

console.log(calculateTotalPrice(5,6,9,10));  // output:[5,6,9,10] // coverts  all into array and returns as an array
// numb1=5,numb2=6 , and itemPrice:[9,10]




// Passing objects in Functions:

// Object:
let person1 = {
    userName:'Harman' ,
    age:26 ,
    country:"India" 
} ;
let person2= {
    userName:'Harjot' ,
    age:25 ,
    country:"Canada" 
} ;

// function:
function  displayPersonInfo(anyObject) {
    if (anyObject.userName==='Harman'){
        console.log(`${anyObject.userName} is from ${anyObject.country}`);

    }
    else {
        console.log(`${anyObject.userName} is from ${anyObject.country} and his age is${anyObject.age}`);

    }
}
displayPersonInfo(person1); // Harman is from India



// Passing Arrays in Functions:

//array
let arrayFun=[111,222,333,444]

//function

function getArray(anyArray)
{   
    return anyArray[22] ; //return 333 from array which is at 2 position 

}
console.log(getArray(arrayFun));


