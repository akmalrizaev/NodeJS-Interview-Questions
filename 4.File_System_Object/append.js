// fs.appendFile()

// The "writeFile()" method would over-write the content of any file.
// But if we want to add some content to a file,
// there is an another method
// The "appendFile()" method allows us to add / append data to a file.

const fs = require('fs');
const content = '\nNew Data';

fs.appendFile('text.txt', content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Append Successfully');
  }
});
