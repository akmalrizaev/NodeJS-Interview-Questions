// To make the function available defined in a file,
// we need to export it as a module from that file.

const add = (a, b) => {
  return a + b;
};

module.exports = add; // This will export the "add" function.
