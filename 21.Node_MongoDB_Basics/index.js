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

  //    insertData = await collection.insertMany([
  //     {
  //       title: 'Frontend',
  //       technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  //     },
  //     {
  //       title: 'Backend',
  //       technologies: ['Node.js', 'Python', 'MongoDB'],
  //     },
  //   ]);
  //   if (inseconstrtData) {
  //     console.log('Document Inserted');
  //   } else {
  //     throw new Error('Something went wrong');
  //   }

  //   const document = await collection.findOne();

  //   const document = await collection.findOne({ title: 'Backend' });

  //   const document = await collection.find({ title: 'Backend' }).toArray();

  const document = await collection.find().toArray();

  if (document) {
    // const res = await document.next();
    // console.log(res);

    // for await (const cursor of document) {
    //   console.log(cursor);
    //   const nextDoc = await document.next();
    //   console.log("Next Document", nextDoc);
    // }

    const title = document.map((doc) => doc.title);
    console.log(title);
  } else {
    console.log('Document not found');
  }
  return 'done';
}

main();
