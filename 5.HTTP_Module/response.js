// Responding to request - Response object

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head><title>Node Server</title></head>');
  res.write('<body><h1>Server running...</h1>');
  res.write('<h3>Hi</h3>');
  res.write('</body></html>');
  res.end();
});

server.listen(3000);
