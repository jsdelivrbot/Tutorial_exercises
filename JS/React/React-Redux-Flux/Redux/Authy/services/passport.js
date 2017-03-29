/**
 * @summary: Configure passport authentication strategy
 */

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../database/models/user');
const config = require('../config');

//Configure options for JWT strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeader('authorization'),
	secretOrKey: config.secret
};

//Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {

	User.findById(payload.sub, (err,user) => {
		
		//If user does not exist return false
		if(err){
			return done(err,false);
		}
		
		//If user does exist or error was found
		if(user){
			done(null, user);
		}
		else{
			done(null, false)
		}

	});

});

// Activate Jwt strategy with passport
passport.use(jwtLogin);


