const Product = require('../models/product');

async function updateProd() {
  try {
    // UPDATE products SET price=42 WHERE id=3;
    const updateProduct = await Product.update(
      { price: 42 },
      { where: { id: 3 } }
    );
    console.log('Product updated:', updateProduct);
  } catch (err) {
    console.log(err);
  }
}

module.exports = updateProd;
