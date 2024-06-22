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

  static fetchProductById(id) {
    return pool.execute('select * from products where id=?', [id]);
  }

  static deleteProductById(id) {
    return pool.execute('delete from products where id=?', [id]);
  }

  postData() {
    return pool.execute(
      'insert into products(productname, price, img) values(?,?,?)',
      [this.productname, this.price, this.image]
    );
  }

  editData() {
    return pool.execute(
      'update products set productname=?, price=?, img=? where id=?',
      [this.productname, this.price, this.image, this.id]
    );
  }
};
