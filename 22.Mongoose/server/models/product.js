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
  price: {
    type: Number,
    required: [true, 'Price cannot be empty'],
    // min: [1, 'Price value should be at least 1'],
    // max: [2000, 'Price cannot exceed 2000'],
    validate: [
      {
        validator: function (value) {
          return value > 0 && value % 5 === 0;
        },
        message:
          'Price must be a non-zero, positive multiple of 5, got {VALUE} as value',
      },
      {
        validator: function (value) {
          return value <= 100000;
        },
        message: 'Price cannot exceed 100K, got {VALUE} as value',
      },
    ],
  },
  category: String,
});

// By default the mongoose convention will pluralize the model name we give & convert it
// to lowercase to determine the collection name.

const Product = mongoose.model('product', productSchema);

module.exports = Product;
