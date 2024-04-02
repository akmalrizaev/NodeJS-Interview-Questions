// Node programming is all about using modules,
// be it your own - custom modules,
// built-in modules or
// third party library modules

// To make the function available defined in a file,
// we need to export it as a module from that file.
// & import it using the require statement.

// const cObj = require('./calc');

// console.log(cObj.add(8, 2));
// console.log(cObj.divide(8, 2));
// console.log(cObj.multiply(8, 2));
// console.log(cObj.subtract(8, 2));

// Basic Debugging
// node --inspect-brk first.js
// The debugger is on, but it needs to be opened in a seperate debegger window.

const { add, divide, multiply, subtract } = require('./calc');

console.log(add(8, 2));
console.log(divide(8, 2));
console.log(multiply(8, 2));
console.log(subtract(8, 2));
