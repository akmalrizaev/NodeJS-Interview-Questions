const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'akmal', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
});

module.exports = { sequelize };
