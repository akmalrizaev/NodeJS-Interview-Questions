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
    pool.query('update products set price=30 where id=4', (error, rsh) => {
      if (err) {
        console.log(err);
      } else {
        console.log(rsh);
      }
    });
    pool.query('delete from products where id=4', (error, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(rsh);
      }
    });
    pool.execute('select * from products', (error, data) => {
      console.log(data);
    });
  }
});

const server = app.listen(3000, () => {
  console.log('Server is Running...');
});
