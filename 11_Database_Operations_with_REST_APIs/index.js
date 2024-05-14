// Introduction to API
// API - Application Programing Interface
// It has "API endpoints" which are called by client requests.
// API is a service / a program / an interface through which the client side developer
// can commincate with the server.
// The APIs used for data sharing are known as REST APIs.
// REST - Representational State Transfer

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

// Inserting Data with POST Request
app.post('/postdata', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.send(err.sqlMessage).status(500);
    } else {
      pool.execute(
        'insert into products(id, productname, price) values(5, "New Product"',
        (error, data) => {
          if (error) {
            res.send(error).status(500);
          } else {
            res.send(data).status(201);
          }
        }
      );
    }
  });
});

// Deleting Records with API
app.delete('/deleteData', (req, res) => {
  pool.execute('delete from products where id=5', (error, rsh) => {
    res.status(200).send(rsh);
  });
});

// Updating database with PUT
app.put('/putData', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.send(err.sqlMessage);
    } else {
      pool.execute(
        'update products set productname="Pineapple" price=20 where id=1',
        (error, rshObj) => {
          res.send(rshObj).status(200);
        }
      );
    }
  });
});

const server = app.listen(3000, () => {
  console.log('Server is Running...');
});

// Status codes
// - Code(100-199) : Informational responses
// - Code(200-299) : Successful responses
// - Code(300-399) : Redirection messages
// - Code(400-499) : Client error responses
// - Code(500-599) : Server error responses

// What are PUT & PATCH requests?
// Both are updating type of requests.
// When making a query to update the database in any sense, we use either of
// these two methods.
// PUT is used when an entire dataset, e.g a record is to be updated at once
// PUT will overwrite the entire record
// PATCH request will make a patch & edit the specific field value only.
// PATCH wil overwrite only the specific fields.
