const Product = require('../models/product');

async function deleteProd() {
  // DELETE FROM 'products' WHERE 'name' = 5
  try {
    const removeProd = await Product.destroy({
      where: { id: 4 },
    });
    console.log('Product deleted:', removeProd);
  } catch (err) {
    console.log(err);
  }
}

// To delete whole table
// const removeProd = await Product.destroy({truncate: true});

module.exports = deleteProd;
