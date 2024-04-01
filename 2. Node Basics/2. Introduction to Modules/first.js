// Node programming is all about using modules,
// be it your own - custom modules,
// built-in modules or
// third party library modules

// To make the function available defined in a file,
// we need to export it as a module from that file.
// & import it using the require statement.

const add = require('./calc');

console.log(add(8, 2));
