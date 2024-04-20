const http = require('http');

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Data Form </title></head>');
    res.write('<body><form action="/data" />');
    res.write('<input type="text" name="code"/>');
    res.write('<input type="text" name="product"/>');
    res.write('<button>Submit</button>');
    res.write('<h3>' + req.url + '</h3>');
    res.write('</body></html>');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head><title>Data Form </title></head>');
  res.write('<h3>' + req.url + '</h3>');
  res.write('</body></html>');
  return res.end();
});

server.listen(3000);
