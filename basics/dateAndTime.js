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



