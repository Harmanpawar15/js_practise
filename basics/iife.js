// Immediately Invoked Function Expressions (IIFE)

// We use iife to: 1.stop pollution due to global scope Variables 2.immediatly execute our function

// Syntax: (function) ();

// Named IIFE:
(function myfunction() {
    console.log(`User Loggged Inn`)
}) () ;

// Anonymous IIFE:
// No Nmae IIFE:
( (name) => {
    console.log(`${name} logged innn`)
}
) ('Harman'); 