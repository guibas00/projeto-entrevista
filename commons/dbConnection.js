const Sequelize = require('sequelize');
module.exports.sequelize = new Sequelize('cliente', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
  });