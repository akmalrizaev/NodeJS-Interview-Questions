const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1> Responding to the Request </h1>');
  res.write('<h1> URL : ' + req.url + '</h1>');
  res.end();
});

app.get('/user/:userId/:userName', (req, res) => {
  //   res.send(req.params);
  res.write('<html><head><title>Node Server</title></head>');
  res.write(
    '<body style="background:black; margin:5em; text-align:center; color:wheat">'
  );
  res.write('<h1>' + req.params.userId + '</h1>');
  res.write('<h1>' + req.params.userName + '</h1>');
  res.write('</body></html>');
  res.end();
});

app.listen(PORT, () => {
  console.log('Server is Running');
});
