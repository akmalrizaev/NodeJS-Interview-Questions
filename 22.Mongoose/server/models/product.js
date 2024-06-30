const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'Id is required'],
    default: 3,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [2, 'Characters limit not met'],
    maxLength: [15, 'Characters exceed the given length'],
  },
  price: Number,
  category: String,
});

// By default the mongoose convention will pluralize the model name we give & convert it
// to lowercase to determine the collection name.

const Product = mongoose.model('product', productSchema);

module.exports = Product;
