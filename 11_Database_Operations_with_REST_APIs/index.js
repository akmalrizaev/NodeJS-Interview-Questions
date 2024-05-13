const express = require('express');
const app = express();
const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'nodemysql',
  port: 3306,
  multipleStatements: true,
});

app.get('/getData', (req, res) => {
  pool.execute('select * from products', (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

const server = app.listen(3000, () => {
  console.log('Server is Running...');
});
