const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.get('/', (req, res) => {
  // The sendFile() will need an absolute path.

  //   res.sendFile(
  //     'D:\\Github\\NodeJS-Interview-Questions\\6.Expressjs\\index.html'
  //   );

  //   res.sendFile(__dirname + '/index.html');

  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is Running...');
});
