// import { Sequelize } from 'sequelize';

// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('test', 'root', 'akmal', {
//   dialect: 'mysql',
//   host: 'localhost',
//   port: 3306,
// });

const { sequelize } = require('./db.js');
const Product = require('./models/product');
const createProd = require('./product-crud/createProd.js');
const readProd = require('./product-crud/readProd.js');

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection established');

    await Product.sync();
    console.log('Table created');

    await createProd();

    await readProd();
  } catch (error) {
    console.error(error);
  } finally {
    await sequelize.close();
  }
}

main();
