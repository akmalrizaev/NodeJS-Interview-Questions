// File System Object

// "fs" is an internal node module which offers file handling features
// like creating, copying, renaming or deleting files
// & also the same with folders.
// We can also get various information like whether an entity is a file or a directory,
// the created / modified date and time, size, etc...

//  To work with the file system object,
// "fs" module is required.

const fs = require('fs');

fs.stat('../node_modules', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Does it Exist?
// fs.existsSync() -> Synchronous method
// fs.exists() -> Asynchronous method

//  Let's check if there is any entity named - "index.js"

let existFlag = fs.existsSync(process.argv[2]);

console.log(existFlag);
