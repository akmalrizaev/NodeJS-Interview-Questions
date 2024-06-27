// const pool = require('../utils/database');

// module.exports = class Products {
//   constructor(id, productname, price, image) {
//     this.id = id;
//     this.productname = productname;
//     this.price = price;
//     this.image = image;
//   }
//   static fetchProducts() {
//     return pool.execute('select * from products');
//   }

//   static fetchProductById(id) {
//     return pool.execute('select * from products where id=?', [id]);
//   }

//   static deleteProductById(id) {
//     return pool.execute('delete from products where id=?', [id]);
//   }

//   postData() {
//     return pool.execute(
//       'insert into products(productname, price, img) values(?,?,?)',
//       [this.productname, this.price, this.image]
//     );
//   }

//   editData() {
//     return pool.execute(
//       'update products set productname=?, price=?, img=? where id=?',
//       [this.productname, this.price, this.image, this.id]
//     );
//   }
// };

const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Product = sequelize.define(
  'product',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    productname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: 'products', timestamps: false }
);

module.exports = Product;
