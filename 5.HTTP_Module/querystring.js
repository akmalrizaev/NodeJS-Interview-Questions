// "querystring" - Parsing

const http = require('http');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  let method = req.method;
  let url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Data Form </title></head>');
    res.write('<body><form action="/data" method="POST" />');
    res.write('<input type="text" name="code"/>');
    res.write('<input type="text" name="product"/>');
    res.write('<button>Submit</button>');
    res.write('<h3>' + req.url + '</h3>');
    res.write('</body></html>');
    return res.end();
  } else if (url === '/data' && method === 'POST') {
    const data = [];
    let s = '';
    req.on('data', (chunk) => {
      data.push(chunk);
    });
    req.on('end', () => {
      s = Buffer.concat(data).toString();
      console.log(s);
      console.log(qs.parse(s));
      const obj = qs.parse(s);
      console.log(obj.code, obj.product);
    });

    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Data Form </title></head>');
    res.write('<h3>' + req.url + '</h3>');
    res.write('</body></html>');
    return res.end();
  }
});

server.listen(3000);
