const mongoose = require('mongoose');

// By default the mongoose convention will pluralize the model name we give & convert it
// to lowercase to determine the collection name.

const Product = mongoose.model('product', {
  id: Number,
  name: String,
  price: Number,
  category: String,
});

module.exports = Product;
