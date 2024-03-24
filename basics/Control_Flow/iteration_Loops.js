// Syntax of for loop in js:
// for(initialization; condition; increment/decrement) {
//   code block to be executed
// }

//Basic Example:
for (let i =1; i<=10; i++){
    let element=i;
    console.log(`Value of element is ${element}`);
}


//Print table from 1 to 10 using itertion:

for (let i=1; i<=10; i++){
    console.log(`Table of ${i}`);
    
    for(let j=1;j<=10;j++) {
        console.log(`${i} * ${j} = ${i*j}`) ;
    }
}


// For loop for Array:


let arr=["Junior Developer","Middle Developer", "Senior Developer"]
for(let i=0; i<arr.length; i++){
   console.log(`Array list id: ${arr[i]}`)
    
}


// Break and Continue:

for(let i = 1; i<10; i++){

  if(i==5){
    console.log(`Detected 5`) ;
   // break ;
   // continue
  }
  console.log(`value of i= ${i}`)

}





