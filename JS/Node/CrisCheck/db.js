//
// Create Sequelize object and import db table models
//

import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

let db = null;

module.exports = app => {

  //
  // If db has not been instantiated, pass db config and
  // models for instantiation.
  //
  if(!db){

    //
    // Pull config information from the config file and load into
    // new sequalize object.
    //
    const config = app.libs.config;
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );

    //
    // Assign sequlize properties to db object
    //
    db = {
      sequelize,
      Sequelize,
      models: {}
    };

    //
    // Iterate over all model files in the model directory and import/load
    // in using seqImport and insert into DB structure.
    //
    const dir = path.join(__dirname, 'models');
    fs.readdirSync(dir).forEach( file => {
      const modelDir = path.join(dir, file);
      const model = sequelize.import(modelDir);
      db.models[model.name]= model;
    });

    //
    // Iterate through models calling the associate function.
    //
    Object.keys(db.models).forEach( key => {
      db.models[key].associate(db.models);
    });

  }

  return db;

}
