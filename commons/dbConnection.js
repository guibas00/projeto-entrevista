const Sequelize = require('sequelize');
const config = require('../config.json')
module.exports.sequelize = new Sequelize('cliente', config.db.login, config.db.pass, {
    host: 'localhost',
    dialect: 'mysql',
  });