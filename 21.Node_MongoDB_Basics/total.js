const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'employees';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('empData');

  const empCount = await collection.countDocuments();
  const empSalaryFilter = { emp_salary: { $gt: 50000 } };
  const highestEmpSal = await collection.countDocuments(empSalaryFilter);

  console.log(`Total Employees in the Collection: ${empCount}`);
  console.log(`Total Employees with Salary > 50000: ${highestEmpSal}`);

  client.close();
  return 'done.';
}
main();
