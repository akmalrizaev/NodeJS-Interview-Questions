// const pool = require('../utils/database');

// module.exports = class Users {
//   constructor(id, userName, password) {
//     this.id = id;
//     this.userName = userName;
//     this.password = password;
//   }

//   insertUser() {
//     return pool.execute('insert into users(userName, password) values(?,?)', [
//       this.userName,
//       this.password,
//     ]);
//   }

//   static fetchUserByUsername(userName) {
//     return pool.execute('select * from users where userName=?', [userName]);
//   }
// };

const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: 'users', timestamps: false }
);

Users.insertUser = async ({ userName, password }) => {
  await User.create({
    userName: userName,
    password: password,
  });
};

Users.fetchUserByUsername = async (userName) => {
  return User.findOne({
    where: {
      userName: userName,
    },
  });
};

module.exports = User;
