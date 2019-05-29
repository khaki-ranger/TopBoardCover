'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Item = loader.database.define('items', {
  itemId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  imgPath: {
    type: Sequelize.STRING,
    allowNull: false
  },
  notice: {
    type: Sequelize.STRING,
    allowNull: true
  },
  original: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: true
  });

module.exports = Item;
