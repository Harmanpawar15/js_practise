// Promises basics:its frst created then consumed:

// Creating  basic Promise:
const  promiseOne= new Promise (function(resolve,reject){
       // async task , cryptography , networking tasks come here 

    function timeOut (){
        console.log("I am displaying after time out")
        resolve();
    }
    setTimeout(timeOut,4000) ;
   

       // dont forget to call resolve  or reject after completing the task.
})

// Promise resolved will never come before the task : keep that in mind 
// consuming promises : basic method 
promiseOne.then(function(){
    console.log( "Promise is resolved");
})

// OTHER WAY TO CREATE PROMISES: i.e without storing them into variables:

new Promise(function(resolve,reject){
 let x= 4 ;
 if (x==4){
    console.log( 'Value is accepted by If condition')
 }
 else {
    console.log('Value is rejected by If condition');
 }
 resolve()
}).then(function(){
    console.log("Promise 2 Resolved ")
})


// PASSING DATA FROM CREATE PRMISE TO CONSUME PRMS:

const promiseThree = new Promise (function(resolve,reject){
function userDetails (){
    // you can pass any kind of values/ paramters in resolve 
    resolve({
        Name:'John' ,
        Age:35,
        Email:'John@email.com'
 } )
 
}
userDetails();

})
promiseThree.then(function(user){
    console.log(user)

})


// HANDLING ERROR AND CREATING MULTIPLE .THEN AND OTHER THINGS:

const promiseFour= new Promise (function(resolve,reject){
    let dataBase=false
    if(!dataBase){
        resolve({
            Name:'Archie' ,
            Age:5,
            Email:'Archie@email.com'

        })
        
    }
        else{
           reject("Databse is Down") // we use reject when our promise is failed 
        }
})

promiseFour.then(function(userData){
    console.log(userData);
    return userData.Email

})
.then(function(email){
    console.log(email)
})
.catch(function(err){
    console.log("Error in reading Data")
})
.finally(function(){
    console.log("Promise has been executed")
})

// ASYNC AWAIT :

const promiseFive = new Promise( function(resolve, reject){
    setTimeout (function(){
    let error = false
    if (!error) {
    resolve ({username:
    "javascript", password:
    "123" })
    } else {
    reject ( 'ERROR: JS went wrong' )
    }
},1000) 
})

async function consumeFive(){
    try{
        const response= await promiseFive
     console.log(response)

    }
    catch(e){
        console.log(e)
    }
     

}
consumeFive()


//  FETCHING REAL TIME DATA FROM DATABSE USING ASYNC:

async function fetchData(){
    //fetching data from the database using async
    try{
    const  data=await  fetch("https://api.github.com/users/hiteshchoudhary") ;
    let modifiedData =  await data.json() ;
    console.log(modifiedData.login); }
    catch(err){console.log('Error', err)};
}

fetchData();

// FETCHING REAL TIME DATA WITH PROMISE:THIS 

fetch("https://api.github.com/users/harmanpawar15")
.then(function(getData){
//     let  prom = getData.json() ;
//    return  prom ;
    return getData.json() ;

})
.then(function(writeData){
    console.log(writeData)

})
.catch(function(err){
    console.log("USER NOT FOUND")

})

