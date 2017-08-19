/**
*
*
* @summary: Configure passport.js
*
*
*/

// import passport and google oauth modules
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// import config keys
const keys = require('../config/keys');

// import mongoose user schema
const mongoose = require('mongoose');
const User = mongoose.model('users');

// define a serialize function in passport to generate
// a unique id key that passport can assign as a cookie
passport.serializeUser((user,done) => {
  done(null, user.id);
});

// define deserialize function which will take cookie in
// passport and return matching user
passport.deserializeUser((id,done) => {
  User.findById(id).then(user => { done(null, user) });
})

// define google application credentials
const googleAppCredentials = {
  clientID: keys.CLIENTID,
  clientSecret: keys.CLIENTSECRET,
  callbackURL: '/auth/google/callback'
}

// define google oauth strategy and google callback logic
passport.use(new GoogleStrategy(googleAppCredentials, (accessToken, refreshToken, profile, done) => {

    // check db for an existing google id and
    // return either new instance or exisiting
    User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if(existingUser) {
            done(null, existingUser);
          } else {
            new User({ googleId: profile.id }).save().then(user => done(null, user));
          }
        })
  }));
