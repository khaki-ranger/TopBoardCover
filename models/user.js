'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const User = loader.database.define('users', {
  userId: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sex: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.STRING,
    allowNull: false
  },
  college: {
    type: Sequelize.STRING,
    allowNull: false
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false
  },
  club: {
    type: Sequelize.STRING,
    allowNull: false
  },
  itemId: {
    type: Sequelize.UUID,
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: true
  });

module.exports = User;
