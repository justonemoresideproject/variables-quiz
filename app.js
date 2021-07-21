// let and const Exercise
// In this exercise, you’ll refactor some ES5 code into ES2015.

// ES5 Global Constants
// var PI = 3.14;
// PI = 42; // stop me from doing this!
// ES2015 Global Constants
// /* Write an ES2015 Version */
const PI = 3.14;
// Error
PI = 3.15;

// Quiz
// What is the difference between var and let?
    // var can be redeclared and is scoped to the function it is declared in. let can be reassigned but not redeclared and is scoped to the code block it is declared in
// What is the difference between var and const?    
    // var can be redeclared and reassigned while const cannot do either. The scope for var is also tied to the function while const is tied to the block of code
// What is the difference between let and const?
    // let can be reassigned while const cannot.
// What is hoisting?
    // mechanism to where variables and function declarations are moved to the top of their scope before code execution