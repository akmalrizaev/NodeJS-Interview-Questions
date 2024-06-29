const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'employees';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('empData');

  const filterQuery = { department: 'Engeneering' };
  //   const updateQuery = { $inc: { emp_salary: -5000 } };
  const updateQuery = { $inc: { emp_salary: 5000 } };
  const document = await collection.updateMany(filterQuery, updateQuery);

  if (document) {
    console.log('Document updated successfully');
    const result = await collection.find(filterQuery).toArray();
    console.log(result);
  } else {
    console.log('Document not found');
  }

  client.close();
  return 'done.';
}
main();
