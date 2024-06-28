//import { MongoClient } from 'mongodb';    // ESM
const { MongoClient } = require('mongodb'); // CJS
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'courses';

async function main() {
  await client.connect();
  console.log('Connection successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('topics');
  return 'done';
}

main();
