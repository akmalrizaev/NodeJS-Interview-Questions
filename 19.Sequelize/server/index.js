// import { Sequelize } from 'sequelize';

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'akmal', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
});

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection established');
  } catch (error) {
    console.error(error);
  } finally {
    await sequelize.close();
  }
}

main();
