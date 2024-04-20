// With HTTP we use request.url property to handle routes.

const http = require('http');

const product = {
  pcode: 1001,
  product: 'Apple',
};

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
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(product));
    res.end();
  }
});

server.listen(3000);
