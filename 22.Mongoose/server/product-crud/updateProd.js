const Product = require('../models/product');

async function updateProd() {
  const prodUpdate = await Product.updateOne(
    { name: 'Product 3' },
    { $set: { price: 65 } },
    { new: true, runValidators: true }
  );
  console.log('Product updated', prodUpdate);
}

module.exports = updateProd;
