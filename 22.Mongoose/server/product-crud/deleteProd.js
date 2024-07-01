const Product = require('../models/product');

async function deleteProd() {
  const productDelete = await Product.deleteOne({
    name: 'Product 3',
  });
  console.log('Product deleted', productDelete);
}

module.exports = deleteProd;
