const express = require('express');
const app = express();
const home = require('./routes/home');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', home);

const server = app.listen(3000, () => {
  console.log('Server Running...');
});
