const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'Id is required'],
    default: 3,
  },
  name: String,
  price: Number,
  category: String,
});

// By default the mongoose convention will pluralize the model name we give & convert it
// to lowercase to determine the collection name.

const Product = mongoose.model('product', productSchema);

module.exports = Product;
