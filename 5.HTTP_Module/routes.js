// With HTTP we use request.url property to handle routes.

const http = require('http');

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Home Page</title></head>');
    res.write('<body><h1>Home Page</h1>');
    res.write('<h3>' + req.url + '</h3>');
    res.write('</body></html>');
    return res.end(); // Must use return with res.end() when there are conditional responses for different urls.
  } else if (url === '/data') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>JSON Data</title></head>');
    res.write('<body><h1>JSON Data</h1>');
    res.write('<h3>' + req.url + '</h3>');
    res.write('</body></html>');
    res.end();
  }
});

server.listen(3000);
