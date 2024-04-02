// To make the function available defined in a file,
// we need to export it as a module from that file.

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

// const cObj = {
//   add: add,
//   subtract: subtract,
//   multiply: multiply,
//   divide: divide,
// };

const cObj = {
  add,
  subtract,
  multiply,
  divide,
};

module.exports = cObj;
