//import { MongoClient } from 'mongodb';    // ESM
const { MongoClient } = require('mongodb'); // CJS
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbName = 'courses';

async function main() {
  await client.connect();
  console.log('Connection successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('topics');
  //   const insertData = await collection.insertOne({
  //     title: 'Frontend',
  //     technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  //   });
  const insertData = await collection.insertMany([
    {
      title: 'Frontend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Backend',
      technologies: ['Node.js', 'Python', 'MongoDB'],
    },
  ]);
  if (insertData) {
    console.log('Document Inserted');
  } else {
    throw new Error('Something went wrong');
  }
  return 'done';
}

main();
