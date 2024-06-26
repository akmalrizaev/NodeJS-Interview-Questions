const Product = require('../models/product');

async function createProd() {
  try {
    const newProd = await Product.create({
      name: 'Product 2',
      price: 0,
      category: 'Electronics',
    });
  } catch (err) {
    console.error(err);

    // if (err.name === 'SequelizeUniqueConstraintError') {
    //   console.error('Unique constraint error', err.errors[0].message);
    //   return;
    // }

    if (err.name === 'SequelizeValidationError') {
      err.errors.forEach((errItem) => {
        console.log('Error: ', errItem.message);
        console.log('Got value: ', errItem.value);
      });
    }
  }
}

module.exports = createProd;
