// Everytime request is received we have to check the content type.
// If the content-type is application/json then only the futher routes
// should be accessed. Else - it should return an error.

const express = require('express');
const app = express();
const routes = require('./routes');

const PORT = 3000;

app.use('/', routes);

app.get('/', (req, res) => {
  res.send('The Root Route.');
});

app.listen(PORT, () => {
  console.log('Server is Running...');
});
