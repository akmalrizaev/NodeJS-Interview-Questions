// Deleting Folder fs.rmdir() & recursive

const fs = require('fs');

fs.rmdir('./newFolder', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Folder deleted');
  }
});

// How will we delete a non-empty directory - use "options" recursive, by default false
// fs.rmdir('./filledDir',{recursive:true},(err) => {})
