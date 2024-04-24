// In multiple layers of routes, the code can get complicated.
// At that time we should use modular approach.
// Using module-based approach is much better in terms of Seperation of Concern
// which enhances the code readability as well.

const express = require('express');
const app = express();
const users = require('./users');

const PORT = 3000;

app.use('/users', users);

app.listen(PORT, () => {
  console.log('Server is Running...');
});
