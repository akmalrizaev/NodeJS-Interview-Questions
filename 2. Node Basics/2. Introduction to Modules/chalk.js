// Chalk Library
// npm install chalk@4

const chalk = require('chalk');

console.log(chalk.bgMagenta('Hello World!'));
console.log(chalk.bgMagenta.bold('Hello World!'));

console.log(chalk.bgGreenBright.black('Success!'));
console.log(chalk.bgYellow.black('Warning'));
console.log(chalk.bgRed('Error'));
