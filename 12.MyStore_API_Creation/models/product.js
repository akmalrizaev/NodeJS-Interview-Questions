const pool = require('../utils/database');

module.exports = class Products {
  constructor(id, productname, price, image) {
    this.id = id;
    this.productname = productname;
    this.price = price;
    this.image = image;
  }
  static fetchProducts() {
    return pool.execute('select * from products');
  }

  postData() {
    return pool.execute(
      'insert into products(productname, price, img) values(?,?,?)',
      [this.productname, this.price, this.image]
    );
  }
};
