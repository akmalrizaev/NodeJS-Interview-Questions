const express = require('express');
const app = express();
const fs = require('fs');

const PORT = 3000;
const data = fs.readFileSync('./index.html');

app.get('/', (req, res) => {
  res.send(data.toString());
});

app.post('/data', (req, res) => {
  res.send(req.method + ' request received.');
});

app.listen(PORT, () => {
  console.log('Server is Running');
});
