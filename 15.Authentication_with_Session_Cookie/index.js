const express = require('express');
const app = express();
const session = require('express-session');
const MysqlStore = require('express-mysql-session')(session);

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

app.get('/trySession', (req, res) => {
  // console.log(req.session.id);
  res.send(req.session.isLoggedIn);
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
