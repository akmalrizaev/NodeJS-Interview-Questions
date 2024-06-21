const express = require('express');
const app = express();
const session = require('express-session');
const MysqlStore = require('express-mysql-session')(session);
const JWT = require('jsonwebtoken');

const home = require('./routes/home');
const addProduct = require('./routes/addProduct');
const editProduct = require('./routes/editProduct');
const deleteProduct = require('./routes/deleteProduct');
const tryCookie = require('./routes/tryCookie');
const userAuth = require('./routes/userAuth');

const options = {
  connectionLimit: 10,
  port: 3306,
  host: 'localhost',
  database: 'mystore',
  user: 'root',
  password: 'akmal',
  createDatabaseTable: true,
};

const sessionStore = new MysqlStore(options);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(
  session({
    secret: 'It is a secret',
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);

app.get('/tryJWT', (req, res) => {
  const token = JWT.sign({ isLoggedIn: 'true' }, 'it is a secret');

  res.cookie('token', token);
  res.send(token);
});

app.get('/verifyJWT', (req, res) => {
  const token = req.get('cookie').split('=')[1].split(';')[0];
  console.log(token);
  const decodedToken = JWT.verify(token, 'it is a secret');
  console.log(decodedToken);
});

app.use('/', home);
app.use('/add-product', addProduct);
app.use('/edit-product', editProduct);
app.use('/delete-product', deleteProduct);
app.use('/tryCookie', tryCookie);
app.use('/', userAuth);

app.use(express.static(__dirname));

const server = app.listen(3000, () => {
  console.log('Server Running...');
});
