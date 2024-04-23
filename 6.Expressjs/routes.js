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

// Wildcard characters enable various pattern matchings in the routes
// ? for optional character
// + for n-number of same characters
// * for any string

app.get('/product-01', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1> Welcome to Products Route </h1>');
  res.write('<h1> URL : ' + req.url + '</h1>');
  res.end();
});

app.get('/product*-01', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1> Welcome to Products Route </h1>');
  res.write('<h1> URL : ' + req.url + '</h1>');
  res.end();
});

app.listen(PORT, () => {
  console.log('Server is Running');
});
