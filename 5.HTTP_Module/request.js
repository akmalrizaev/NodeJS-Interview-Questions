// Decoding "The Request" object

// The request object contains every information of client & related data.

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Server running...');
  console.log(req);
  console.log(req.headers);
  console.log(req.url);
  console.log(req.method);
});
server.listen(3000);
