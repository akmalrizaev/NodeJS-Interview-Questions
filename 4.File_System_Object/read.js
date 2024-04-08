// Reading Files with "fs" Object
// The "fs" object offers a method called "readFile()"
// which reads a file & returns the content.

const fs = require('fs');

fs.readFile('text.txt', (err, data) => {
  console.log(data.toString());
});
