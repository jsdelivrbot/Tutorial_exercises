/**
 * @summary: Create user model for Mongo
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define user schema 
const userSchema = new Schema({
	email: {
			type: String, 
			unique: true,
			lowercase: true
	}, 
	password: String
});

const model = mongoose.model('User', userSchema);

module.exports = model;