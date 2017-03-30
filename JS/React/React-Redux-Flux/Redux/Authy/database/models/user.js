/**
 * @summary: Create user model for Mongo
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const encrypt = require('bcrypt-nodejs');

//
// User Schema
//
const userSchema = new Schema({
	email: {
			type: String, 
			unique: true,
			lowercase: true
	}, 
	password: String
});


//
// Bcrypt pre save hook
//
userSchema.pre('save', function(next){

	//func was called in the user schema 
	const user = this; 

	//Generate a salt
	encrypt.genSalt(10, (err, salt) => {
		if(err){ 
			return next(err); 
		}

		//encrypt user password with the salt given in the callback
		encrypt.hash(user.password, salt, null, (err,hash) => {
			if(err){
				return next(err);
			}

			//overwrite plaintext pasword with encrypted password and call next
			//to exit the hook and allow mongoose to continue adding user to db 
			user.password = hash;
			next();
		})
	})	
})


//
// Compare encrypted password with plaintext 
//
userSchema.methods.comparePassword = function(userPassword, cb){

	encrypt.compare(userPassword, this.password, (err, isMatched) => {

		if(err){return cb(err)}
		cb(null, isMatched)

	})

}



// Create user model and export
const model = mongoose.model('User', userSchema);
module.exports = model;