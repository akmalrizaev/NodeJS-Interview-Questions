// Express.js has methods for each request type.
// For GET request .get() method
// For POST request .post() method
// For EDIT request .put() & .patch() methods
// For DELETE request .delete() method

const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  console.log(req.headers);
  console.log(req.protocol);
  console.log(req.hostname);
  console.log(req.url);
  console.log(req.ip);
});

app.listen(PORT, () => {
  console.log('Server is Running');
});
