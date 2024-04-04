//Filter keyword is use to filter some particular  avlues from array:

// basic array:
let arr=[1,2,3,4,5,6,7]
// without use of return keyword
//let valueofArray=arr.filter((test)=> test>=3 ) // basic filter  function which will return all the values that are greater than 3



// with use of  return keyword :
valueofArray=arr.filter((test)=>
{
    return test%3==0                 // if we use {} we have to use return its mandatory  in arrow function
}
)
//console.log(valueofArray)

// Lets see complex example with array of objects::

let products= 
[{
    name:'apple' , units:2 ,price:30},
    { name:'banana',units:2,price:50},
    { name:"orange" ,units:3 , price:10},
    {name:"mango",  units:4 ,  price:80 }
    
]

let filteredProducts=products.filter((fruits)=>fruits.name==='apple') // basic way to return apple  product only

// price filter:

filteredProducts=products.filter( (fprice)=>fprice.price<=50 && fprice.units<=3)


// console.log(filteredProducts)


// You have an array of numbers. Write a JavaScript function that filters out all the even numbers from the array 
//and returns a new array containing only the even numbers.
// For example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

let allNumber=[1,2,3,4,5,6]

let evenNumber=allNumber.filter( (num)=>num%2===0)
//console.log(evenNumber);



