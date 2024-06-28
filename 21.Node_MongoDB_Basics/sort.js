const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'employees';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('empData');
  const document = await collection
    .find()
    .sort({ emp_salary: 1 })
    .limit(1)
    .toArray();
  if (document) {
    console.log(document);
  } else {
    console.log('Document not found');
  }
  return 'done.';
}
main();
