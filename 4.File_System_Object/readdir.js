// Reading Directory using "readdir()"

// By reading the directory, we can get the content
// i.e, the files & folders of that directory.

const fs = require('fs');

fs.readdir('../node_modules', (err, data) => {
  console.log(data);
});
