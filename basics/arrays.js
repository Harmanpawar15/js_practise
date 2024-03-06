// Arryas and their Methods:

let arr= [1,2,3,4,"Hare Krishna" , true] 
//console.log(arr[4]);
// Output : Hare Krishna

// other way to create array

let newArr= new Array(5,7,8)
//console.log(newArr);
// Output : [1, 5, 7, 8]

// Methods in array:

arr.push(90);
//console.log(arr); // output: [1, 2, 3,  4, "Hare Krishna", true, 90]

arr.pop();
//console.log(arr); // output: [ 1, 2, 3, 4, 'Hare Krishna', true ]

arr.unshift(66) ; // insert value at starting of array 
//console.log(arr); // output:  [66, 1, 2, 3, 4, 'Hare Krishna', true]    

arr.shift(); // remove frst element from array 
//console.log(arr); //  output: [1, 2, 3, 4, 'Hare Krishna', true]

// include:gives ans in t/f so give user answer of question:

//console.log(arr.includes("d")) // false
//console.log(arr.includes(3)) // true

// indexof() gives index of asked value , it returns -1 , if there is no value

//console.log(arr.indexOf(4))

// Join:binds array and chnages its typeof to String,creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string
 let latestArr=arr.join();
 //console.log(latestArr);


 // Slice and Splice:

 //console.log("Array before slice:" , arr);
 //console.log(arr.slice(1,5)) //  It will take elements from first index to last given,take slice till last element metion but will avoid that  
//console.log("Array after Slicing:" , arr) ; 
//Slicicng never changes orignal array , only create copy and will change it 


//console.log("Array before splice: " , arr);
//console.log(arr.splice(1,5)); // start form 1 and take 5 elements, gonna include last element too
                              // here we have deleted elements from 1 to 5 i.e.,  2,3,4,"Hare Krishna"
//console.log("Array after splice: ", arr);

// concat in js :
let arr_after_concat=arr.concat(newArr);
console.log(arr_after_concat); // join both arrays , but in concat we can only jpoin 2 arrays at a time , so if we have to join more than 2 arrays we use SPREAD , 

// SPREAD : join two or more arrays as much we can
let superHero=["Batman", "Spiderman", "SuperMan"];
const arr_spread=[ ...arr, ...newArr, ...superHero] 
console.log(arr_spread); // join all three arrrays  and make it one array 

// Flat in arrays: use to make  a single dimentional array out of nested arrays .

let nestedarray= [1,2,4,[4,7,9,[6,8,3,],8,[2,7,0]],9]; // nested array:in one array many  other arrays


// so to make it simple one array we use  flat() method: we can use it in two ways and in this we have to give depth , to give how much depth u want 2, 3, or any number or infinity 
let simplearray=nestedarray.flat(Infinity);
console.log(simplearray);
console.log(nestedarray.flat(Infinity));


// While data scraping we use fw arrays methods:

//isArray  method : check whether the given argument is an array or not ?
console.log(Array.isArray("Hello")) ; // returns value in T or F

//from: create new array from given value :IMP
console.log(Array.from("Hello")) ; // returns ["H","e","l","l","o"]

//.of:coverts any set of elements to array:

let score1=90;
let score2="Shina" 
let score3="False"
console.log(Array.of(score1,score2,score3)) //returns [90,"Shina",false]
