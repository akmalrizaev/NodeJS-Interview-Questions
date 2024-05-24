const pool = require('../utils/database');

module.exports = class Products {
  static fetchProducts() {
    return pool.execute('select * from products');
  }
};
