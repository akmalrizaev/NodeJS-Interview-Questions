// Writing Files - writeFile()

// The "fs" object provides a way to write files
// i.e, fill content in files programmaticaly.
// "writeFile()" method writes data in any file.

const fs = require('fs');

fs.writeFile('text.txt', 'New Content Written!', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File Written Successefully!');
  }
});
