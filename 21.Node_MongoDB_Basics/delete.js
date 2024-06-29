const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'employees';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('empData');

  //   const document = await collection.deleteOne({ department: 'Sales' });

  //   const document = await collection.deleteMany({
  //     emp_salary: { $lt: 60000 },
  //   });

  //   const document = await collection.deleteMany({ bonus: { $exists: false } });

  const document = await collection.deleteOne();
  if (document) {
    console.log('Document deleted successfully');
    const res = await collection.find({}).toArray();
    console.log(res);
  } else {
    console.log('Document not found');
  }

  client.close();
  return 'done.';
}
main();
