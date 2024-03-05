// All about Date and time:
//To get current date and time
let myDate = new Date () ;
console.log(myDate); //output:2024-03-02T23:39:32.358Z , which is not readable taht much , so we will use different methods to make it more readeable 

//coverting it into string:
console.log(myDate.toString()); 
// To get more variant outputs in date and time format:
console.log(myDate.toDateString());   // returns the current date as a string, with day name, month name, and year.
console.log(myDate.toISOString()); // returns the date as a complete ISO representation
console.log(myDate.toLocaleDateString()); // returns the date as a string value, based on locales (browser settings)
console.log(myDate.toLocaleString()); // returns the date as a string, based on locales (language) settings

// From above you can choose any pattern that suits you , for current date or time .

// Date is object in js


// if i neeed particular  date and time 
//let myBirthday=new Date(1998,0,15) // if we pass month in number in object it starts with 0 , if we declare it simply it starts with 1
let myBirthday= new Date("1998-01-15")  //month starts from 1 as it is not object
console.log(myBirthday.toLocaleString( )); //returns full date : thrs January 15

// TIMESTAMP:

let myTimeStamp = Date.now();
console.log(myTimeStamp); // returns timestamp - number of milliseconds since  1970 Jan 01 00:00:00 UTC.

// While comparing values, it needs to be small so we covert it into seconds by / with 1000:
console. log (Math.floor(Date.now()/1000)); 
// returns timestamp, in seconds: Thursday July 23 20, with this it is easily comparable