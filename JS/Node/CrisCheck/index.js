/***************************
* Main server module
****************************/
import express from 'express';
import consign from 'consign';

//Instantiate app and set port
const app = express();

//Pull modules into app
consign()
  .include('libs/config.js')
  .then('db.js')
  .then('libs/mwares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app);
