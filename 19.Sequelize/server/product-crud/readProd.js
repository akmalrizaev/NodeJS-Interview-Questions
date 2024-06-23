const Product = require('../models/product');

async function readProd() {
  try {
    // The findAll() method is equivalent to the - Select * FROM products query-
    // to fetch & display all the product record.

    // const findProd = await Product.findAll();

    // To fetch particular record(s)
    // In MySQL, we use the WHERE clause like
    // SELECT * FROM TABLE_NAME WHERE category='Electronics' ...
    // With sequelize we use the where attribute.

    const findProd = await Product.findAll({
      where: {
        category: 'Electronics',
      },
    });
    console.log('Displaying all products', JSON.stringify(findProd, null, 2));
  } catch (err) {
    console.error(err);
  }
}

module.exports = readProd;
