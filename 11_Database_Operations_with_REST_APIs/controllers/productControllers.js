const database = require('../utils/database');

exports.getData = (req, res) => {
  database.execute('select * from products', (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
};
