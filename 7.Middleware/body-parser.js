// The body-parser() Middleware
// The third-party middleware "body-parser()" is used to parse the request bodies
// which can be accessed by req.body
// npm install body-parser

// We need to configure the methods/parsers which are provided by the "body-parser"
// - urlencoded body-parser
// - text body-parser
// - JSON body-parser
// - raw body-parser

const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

const PORT = 3000;
const data = fs.readFileSync('./index.html');

app.use(bodyParser.urlencoded());

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
