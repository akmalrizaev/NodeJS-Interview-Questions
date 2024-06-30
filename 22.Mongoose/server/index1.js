const mongoose = require('mongoose');
const User = require('./models/user');
const db = 'mongodb://127.0.0.1:27017/Products';

async function main() {
  await mongoose.connect(db);
  console.log('Database Connected');

  const newUser = new User({
    email: 'example@gmail.com',
    password: 'Example2@',
  });

  await newUser.save();
  console.log('User saved: \n', newUser);
}

main().catch((err) => console.error(err.message));
