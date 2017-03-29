/**
 * @summary: Server route logic
 */

const Authentication = require('./controllers/authentication');

const passportService = require('./services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = (app) => {

	app.post('/signup', Authentication.signup );

	app.get('/', requireAuth, (req,res) => {
		res.json({
			"message": 'logged in'
		})
	})

}