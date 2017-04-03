/**
 * @summary: Server route logic
 */

//Import route controllers
const Authentication = require('./controllers/authentication');

//Import passport, JWT and local strategy
const passport = require('passport');
const passportService = require('./services/passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {

	// user signup 
	app.post('/signup', Authentication.signup );

	// User signup
	app.post('/signin', requireSignin, Authentication.signin );

	app.get('/', requireAuth, (req,res) => {
		res.json({
			"message": 'Super secret code is booby loo'
		})
	})

}