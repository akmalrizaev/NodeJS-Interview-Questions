const Product = require('../models/product');

async function readProd() {
  const findProduct = await Product.find({ category: 'Electronics' });
  console.log('Displaying Products: ', findProduct);
}

module.exports = readProd;
