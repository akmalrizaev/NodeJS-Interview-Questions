const Product = require('../models/product');

async function createProd() {
  try {
    const newProd = await Product.create({
      name: 'Product 1',
      price: 30,
      category: 'Electronics',
    });
  } catch (err) {
    console.error(err);

    // if (err.name === 'SequelizeUniqueConstraintError') {
    //   console.error('Unique constraint error', err.errors[0].message);
    //   return;
    // }
  }
}

module.exports = createProd;
