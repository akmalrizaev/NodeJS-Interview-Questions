const mongoose = require('mongoose');
const db = 'mongodb://127.0.0.1:27017/';

async function main() {
  await mongoose.connect(db);
  console.log('Database Connected');
}

main().catch((err) => console.error());
