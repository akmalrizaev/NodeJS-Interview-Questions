const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
        msg: 'Email is required',
      },
      notEmpty: {
        msg: 'Email cannot be left empty',
      },
      isLowercase: {
        msg: 'Please enter email in lowercase',
      },
      validateEmail(value) {
        const regex = /^[\w-\.]+@([\w-]+\.)[\w-]{2,4}$/;
        if (!regex.test(value)) {
          throw new Error('Invalid email format');
        }
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Password is required',
      },
      notEmpty: {
        msg: 'Password cannot be left empty',
      },
      validatePassword(value) {
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*](?=.{8,}))/;
        if (!regex.test(value)) {
          throw new Error('Invalid password format');
        }
      },
    },
  },
});

module.exports = User;
