// for objects we use for in loop:

let obj= {
    name:"John", 
    age:30, 
    city:"New York"};

    for (let i in obj){
       // console.log(obj[i]) // to print values of keys 
        //console.log(i) // to print the key names
    }



    // for in loop on array:

    const arr=["apple","banana","orange"];
    for (let key in arr){
        //console.log(key)  // output: 0,1,2 - because it is index not a value!
       // console.log(arr[key]);   //outputs each item in the array
    }


    // for in loop on map:

    let map=new Map();
    map.set("IN" , "India");
    map.set("US" ,"USA");
    map.set("UK" ,"United Kingdom");

    for (let key in map) {
        console.log(key) // no output because map is not iteratables
    }