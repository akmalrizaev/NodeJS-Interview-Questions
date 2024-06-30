const mongoose = require('mongoose');
const Product = require('./models/product');
const db = 'mongodb://127.0.0.1:27017/Products';

async function main() {
  await mongoose.connect(db);
  console.log('Database Connected');

  const newProduct = new Product({
    id: 4,
    name: 'Product 4',
    price: 22.6,
    category: 'Electronics',
  });

  await newProduct.save();
  console.log('Product saved: ', newProduct);
}

main().catch((err) => console.error());
