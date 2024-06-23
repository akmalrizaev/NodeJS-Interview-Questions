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
  }
}

module.exports = createProd;
