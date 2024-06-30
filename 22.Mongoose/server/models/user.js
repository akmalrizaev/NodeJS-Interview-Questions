const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),

      message: 'Invalid email format, got value {VALUE} ',
    },
  },
  password: {
    type: String,
    required: [true, 'Pasword is required'],
    validate: {
      validator: (value) => /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(value),
      message: 'Invalid password format, got value {VALUE}',
    },
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
