// Serving static files with express.static()

// The sendFile() & static() - both serve the same purpose.
// With static() method we do not need to specifically write the routes for each file,
// instead we can send the entire folder containing all the files.

const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is Running...');
});
