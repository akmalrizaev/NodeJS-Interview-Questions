// Middleware is a function receiving req & res object
// & is called automatically between request & response cycle.

// If the middleware does not end the response cycle, then we must call
// the next() function to pass the control to the next middleware function.

// Application level middleware
// Route level middleware

const express = require('express');
const app = express();

const myMiddleware = (req, res, next) => {
  console.log('Middleware Called!');
  next();
};

app.use(myMiddleware);

app.get('/', (req, res) => {
  console.log('Response Sent');
  res.send('Response');
});

app.listen(3000, () => {
  console.log('Server is Running...');
});
