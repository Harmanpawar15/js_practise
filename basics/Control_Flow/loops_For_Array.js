
// For Of Loop:

const arr=["apple","banana","orange"];
// let arr=[{
//     name:'apple' ,
//     units:1 ,
//     price:30},
//     { name:'banana',
//     units:2,
//     price:50}
// ]

for(let i of arr){
    if(i=='apple'){
        //console.log("found",i)
        break;

    }
    else{
       // console.log("error")
        break;
    }
    
}

// MAP: is known for unique value and for retreiving data , as same it was enterered , will get data in same order way we printed 
// is in format of key and value pair
let map = new Map();
map.set("IN" , "India");
map.set("US" ,"USA");
map.set("UK" ,"United Kingdom");
//console.log(map);


//for of loop on map

for ( let [key,value]of map) {  // in this I did destructing of map 
    console.log(value)
}


// for of on objects : cannot be itteraarable  

// let obj={
//     name: 'John Doe' ,
//     age:43 ,
//     city:"New York"
// }
// for (let key of obj){
//     console.log(key)   // error:obj is not iterable
// }