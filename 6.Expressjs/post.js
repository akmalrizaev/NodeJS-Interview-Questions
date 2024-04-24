const express = require('express');
const app = express();
const fs = require('fs');

const PORT = 3000;
const data = fs.readFileSync('./index.html');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(data.toString());
});

app.post('/data', (req, res) => {
  //   res.send(req.method + ' request received.');
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log('Server is Running');
});

// When a request is made - various information like the request method,
// headers, etc. is sent in the request object
// & one such property is the request.body

// urlencoded - This middleware is actually a body parser but because it is used
// as middleware, it will hold the body data.

// app.use() - This method creates a hook to attach the middleware.
// Placement is very important
// It must not be placed at the end of the code.
// Place it at the beginning so that the function is hooked properly.
