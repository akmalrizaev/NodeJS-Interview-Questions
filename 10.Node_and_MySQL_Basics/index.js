const express = require('express');
const app = express();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'nodemysql',
  port: 3306,
  multipleStatements: true,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log(err.sqlMessage);
  } else {
    pool.query('select * from products', (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
    console.log('Connection Established');
    pool.query(
      'insert into products(id, productname, price) values(4, "oranges", 300)',
      (err, rsh) => {
        console.log(rsh);
      }
    );
  }
});

const server = app.listen(3000, () => {
  console.log('Server is Running...');
});
