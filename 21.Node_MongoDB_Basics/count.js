const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'employees';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('empData');

  //   const document = await collection.estimatedDocumentCount();

  //   estimatedDocumentCount() is faster but provides an estimated count of all
  // documents in the collection

  //   const document = await collection.countDocuments();

  //   countDocuments() is slower but accurately counts documents that match
  //   specific criteria.

  const document = await collection.countDocuments({
    department: 'Engineering',
  });

  if (document) {
    console.log('Number of documents', document);
  } else {
    console.log('Document not found');
  }
  return 'done.';
}
main();
