// Creating Server with "http"

// Node gives a module named "http" which doesn't need to be installed.
// It is bundled with Node & just have to be imported.

// req - Contains information regarding request
// res - Can be used to respond to the client

// The createServer() method actually returns a server

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Server running...');
});
server.listen(3000);
