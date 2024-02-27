// All about Comparisons in  JavaScript

 //console. log (2 > 1);
// console. log (2 >= 1);
// console. log (2 < 1);
// console. log (2 == 1);
// console. log (2 != 1);

// Above type  of comparison is called Relational Comparison, it is simple with same data type 

     console.log (null < 0); // output 
    console. log (null = 0);
    console. log(null >= 0);


    console.log (undefined == 0 )
    console.log (undefined > 0);
    console.log(undefined < 0);

// Above type of comparison is with different data types and is gonna give different results 



/*The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/