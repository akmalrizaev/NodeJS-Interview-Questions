const mongoose = require('mongoose');
const deleteProd = require('./product-crud/deleteProd');
const db = 'mongodb://127.0.0.1:27017/Products';

async function main() {
  await mongoose.connect(db);
  console.log('Database Connected');

  await deleteProd();
}

main().catch((err) => console.error(err.message));
