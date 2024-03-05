// Arryas and their Methods:

let arr= [1,2,3,4,"Hare Krishna" , true] 
console.log(arr[4]);
// Output : Hare Krishna

// other way to create array

let newArr= new Array(5,7,8)
console.log(newArr);
// Output : [1, 5, 7, 8]

// Methods in array:

arr.push(90);
console.log(arr); // output: [1, 2, 3,  4, "Hare Krishna", true, 90]

arr.pop();
console.log(arr); // output: [ 1, 2, 3, 4, 'Hare Krishna', true ]

arr.unshift(66) ; // insert value at starting of array 
console.log(arr); // output:  [66, 1, 2, 3, 4, 'Hare Krishna', true]    

arr.shift(); // remove frst element from array 
console.log(arr); //  output: [1, 2, 3, 4, 'Hare Krishna', true]

// include:gives ans in t/f so give user answer of question:

console.log(arr.includes("d")) // false
console.log(arr.includes(3)) // true

// indexof() gives index of asked value , it returns -1 , if there is no value

console.log(arr.indexOf(4))

// Join:binds array and chnages its typeof to String,creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string
 let latestArr=arr.join();
 console.log(latestArr);


 // Slice and Splice:

 console.log("Array before slice:" , arr);
 console.log(arr.slice(1,5)) //  It will take elements from first index to last given,take slice till last element metion but will avoid that  
console.log("Array after Slicing:" , arr) ; 
//Slicicng never changes orignal array , only create copy and will change it 


console.log("Array before splice: " , arr);
console.log(arr.splice(1,5)); // start form 1 and take 5 elements, gonna include last element too
                              // here we have deleted elements from 1 to 5 i.e.,  2,3,4,"Hare Krishna"
console.log("Array after splice: ", arr);
