// fs.copyFile()

// The "copyFile()" method is used to copy files
// i.e., it creates a duplicate file at a given location.

const fs = require('fs');

fs.copyFile('./text.txt', './new.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Success');
  }
});
