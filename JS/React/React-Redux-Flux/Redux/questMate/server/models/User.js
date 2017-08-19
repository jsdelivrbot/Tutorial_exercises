/**
*
*
* @summary: Define mongo user schema 
*
*
*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String
});

mongoose.model('users', UserSchema);
