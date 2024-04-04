
// For Each is callback function method , in this we define array in it:

let arr =["apple","banana","orange"];


// for each with Simple function:
arr.forEach( function (item){
   // console.log( arr.indexOf(item)); // output: 0,1,2

})


// for each with  arrow function :
arr.forEach( (item,index,array) => {
    
    //console.log(item, index, array);

}  )



// different function passing in for each  loop:

function test (item){
    //console.log(`This is item from test function ${item}`)
    //console.log(item)

}

//arr.forEach(test)// just reference dont execute it


// Array of Objects Execution:

let products=[{
    name:'apple' ,
    units:1 ,
    price:30},
    { name:'banana',
    units:2,
    price:50}
]

products.forEach(function(item){
    console.log(item.name)
        
})

