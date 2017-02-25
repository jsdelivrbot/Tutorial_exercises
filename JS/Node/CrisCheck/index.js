/***************************
* Main server module
****************************/
import express from 'express';
import consign from 'consign';

//Instantiate app and set port
const app = express();

//Pull modules into app
consign()
  .include('db.js')
  .then('models')
  .then('libs/mwares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app)
