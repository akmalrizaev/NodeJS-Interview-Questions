// Creating Folder using fs.mkdir()

const fs = require('fs');

fs.mkdir('./newFolder', (err) => {
  if (err) {
    if (err.errno === -4075) {
      console.log('Folder already exist');
    } else {
      console.log(err);
    }
  } else {
    console.log('Folder Created');
  }
});
