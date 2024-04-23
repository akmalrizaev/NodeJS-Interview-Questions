const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1> Responding to the Request </h1>');
  res.write('<h1> URL : ' + req.url + '</h1>');
  res.end();
});

app.get('/products', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1> Welcome to Products Route </h1>');
  res.write('<h1> URL : ' + req.url + '</h1>');
  res.end();
});

app.listen(PORT, () => {
  console.log('Server is Running');
});
