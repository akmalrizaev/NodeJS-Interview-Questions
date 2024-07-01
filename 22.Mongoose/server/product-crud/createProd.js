const Product = require('../models/product');

async function createProd(id, name, price, category) {
  const product = new Product({ id, name, price, category });

  await product.save();
  console.log('Product saved', product);
}

module.exports = createProd;
