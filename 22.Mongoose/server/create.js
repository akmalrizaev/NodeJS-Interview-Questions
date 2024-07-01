const mongoose = require('mongoose');
const createProd = require('./product-crud/createProd');
const db = 'mongodb://127.0.0.1:27017/Products';

async function main() {
  await mongoose.connect(db);
  console.log('Database Connected');

  await createProd(4, 'Product 5', 45, 'Office supplies');
}

main().catch((err) => console.error(err.message));
