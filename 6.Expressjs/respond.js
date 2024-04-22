// Responding to the Request

const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  //   res.send('Hello World');
  //   res.send('<h1>Hello World!</h1>');
  res.write('<html><head><title> Node Server </title></head>');
  res.write('<body> <h1> Responding to the Request </h1>');
  res.write('<h1> URL : ' + req.url + '</h1>');
  res.write('</body></html>');
  res.end();
});

app.listen(PORT, () => {
  console.log('Server is Running');
});

// When a request is made, the connection between the client & server is opened
// & the server is in listening mode.

// res.send() - Responds & automatically closes the connection
// res.write() - Sends response but need to close the connection manually using res.end()
