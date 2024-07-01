const mongoose = require('mongoose');
const readProd = require('./product-crud/readProd');
const db = 'mongodb://127.0.0.1:27017/Products';

async function main() {
  await mongoose.connect(db);
  console.log('Database Connected');

  await readProd();
}

main().catch((err) => console.error(err.message));
