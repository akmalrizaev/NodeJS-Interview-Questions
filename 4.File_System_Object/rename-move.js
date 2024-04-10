// Renaming & Moving Files
// fs.rename()
// Renaming, relocating or moving the file can be done
// using rename() method.

const fs = require('fs');

fs.rename('text.txt', './new_text.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Success');
  }
});
