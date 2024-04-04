// Reduce method:one of array prorotype

// Basic refereal example  with function  as a parameter


let arr=[4,5,6]
let myTotal=arr.reduce(function(acc,curval){
    //console.log(`accumulator,${acc}, current value, ${curval}`)
    return acc+curval}, 1

)
//console.log(myTotal);


// arrow function example :

 arr=[4,5,6]
  myTotal=arr.reduce((acc,curval)=>acc+curval,1)
//console.log(myTotal);



// Example of shopping cart:
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// lets do reduce on this shopping cart:
const cartTotalPrice=shoppingCart.reduce(function (acc, curval){
    // add the prices together using a callback function
    return acc+curval.price

},0)
console.log( ` Total price you have to pay is:${cartTotalPrice}` );