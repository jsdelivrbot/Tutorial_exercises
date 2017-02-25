import Sequelize from 'sequelize';

const config = require('./libs/config.js');

let sqlize = null;

module.exports = () => {

  if(!sqlize){
    sqlize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    )
  }

  return sqlize;

}
