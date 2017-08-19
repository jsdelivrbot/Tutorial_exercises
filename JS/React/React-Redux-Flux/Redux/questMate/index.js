/**
*
*
* @summary: Server setup
*
*
*/

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.COOKIEKEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;
const keys = require('./server/config/keys');

require('./server/models/User');
mongoose.connect(keys.MONGOURI);

require('./server/routes/routes_authorization')(app)
require('./server/services/passport');

app.listen(PORT, () => console.log('listening on '+ PORT ))
