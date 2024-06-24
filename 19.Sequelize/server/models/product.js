// Creating Model with Sequelize

const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

// In sequelize, the term table is referred to as "models"

// With "models" we can define several things to Sequelize like
//  - Name of the table
//  - Column details
//  - Data types

const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Please provide name',
      },
      norNull: {
        msg: 'Product name is required',
      },
    },
  },
  price: {
    type: DataTypes.DOUBLE,
  },
  category: {
    type: DataTypes.STRING,
  },
});

module.exports = Product;

// How we are going to synchronize this model with the database?
// Sequelize provides a method called sync() i.e, synchranization to synchronize
// the model with database
