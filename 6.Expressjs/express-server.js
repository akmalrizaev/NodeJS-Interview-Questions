// Creating Server with Express.js

const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is Running');
});

// Usually - the port number is not fixed.
// The "env" environment variable is used
// to find out a free port number.
