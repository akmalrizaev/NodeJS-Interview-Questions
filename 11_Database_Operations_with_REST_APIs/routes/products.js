const express = require('express');
const database = require('../utils/database');
const router = express.Router();
const productController = require('../controllers/productControllers');

router.get('/getData', productController.getData);

// Inserting Data with POST Request
router.post('/postdata', (req, res) => {
  database.getConnection((err, connection) => {
    if (err) {
      res.send(err.sqlMessage).status(500);
    } else {
      database.execute(
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
router.delete('/deleteData', (req, res) => {
  database.execute('delete from products where id=5', (error, rsh) => {
    res.status(200).send(rsh);
  });
});

// Updating database with PUT
router.put('/putData', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.send(err.sqlMessage);
    } else {
      database.execute(
        'update products set productname="Pineapple" price=20 where id=1',
        (error, rshObj) => {
          res.send(rshObj).status(200);
        }
      );
    }
  });
});

module.exports = router;
