const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'employees';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('empData');

  //   const document = awaiit collection.updateMany(
  // 	{department:"Engeneering"},
  // 	{$set: {fulltime: false}}
  //   )

  const document = await collection.updateOne(
    { emp_id: 4 },
    { $set: { name: 'Updated Name' } }
  );

  if (document) {
    console.log('Document updated successfully');
    console.log(document);
  } else {
    console.log('Document not found');
  }

  client.close();
  return 'done.';
}
main();
