/**
 * @summary: Configure passport authentication strategy
 */

const passport = require('passport');

//Import Jwt Strategy
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//Import local sign in strategy
const LocalStrategy = require('passport-local');

//Import DB and config modules
const User = require('../database/models/user');
const config = require('../config');


//
// Configuration for Local sign in strategy
//

//username needs to pulled from field, password is pulled off 
//by passport automatically
const localOptions = { usernameField: 'email' };

//localStrategy pulls email and password from localOptions object 
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {

	console.log('email is ' + email + 'and password is ' + password)

	User.findOne({ email: email }, (err,user) => {
		
		//Return on error or lack of user
		if(err){ return done(err) }
		if(!user){ return done(false) }

		//Compare encrypted password to plaintext password
		user.comparePassword(password, (err,isMatched) => {
			
			//Return on error or password mismatch
			if(err){ return(done(err)) }
			if(!isMatched){ return done(null, false) }
			
			//passport assigns user information to req.user when 
			//done is called
			return done(null, user);

		})
	})
})



//
// Configuration for JWT strategy 
//

//Configure options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

//Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {

	User.findById(payload.sub, (err,user) => {

		//If user does not exist return false
		if(err){
			console.log('[ERROR] - No user does not exist')
			return done(err,false);
		}
		
		//If user does exist or error was found
		if(user){
			done(null, user);
		}
		else{
			console.log('[ERROR] - Could not get user')
			done(null, false)
		}
	});
});

// Activate Jwt strategy with passport
passport.use(jwtLogin);
passport.use(localLogin);


