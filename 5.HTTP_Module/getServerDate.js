// Assignment
// Get server date & time

// Create a route named "/getdate" which returns the server date & time as JSON object
// {"now":"2024-04-20T11:57:09.856Z"}

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/getdate') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ now: new Date() }));
    return res.end();
  }
});

server.listen(3000);
