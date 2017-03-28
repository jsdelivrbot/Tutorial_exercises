/**
 * @summary: Signup logic for authentication route
 */

const User = require('../database/models/user');

//Hnadle logic for new user to database
exports.signup = (req,res,next) => {

	const { email, password } = req.body;

	//Check whether user exists and either return error 
	//or create new user
	User.findOne({ email: email }, (err,existingUser) => {
		
		//Return on error or existing user
		if(err){ return next(err); }
		if(existingUser){ return res.status(422).json({ message: "User email already exists" }); }
		
		//create new user and save to mongoDB
		const user = new User({
			email,
			password
		}).save((err)=> {
			if(err){ return next(err); }
			res.status(200).json({ user })
		});


	});

}