'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Item = loader.database.define('items', {
  itemId: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  itemname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imgPath: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: true
  });

module.exports = Item;
