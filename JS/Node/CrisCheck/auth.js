import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

module.exports = app => {

  const Users = app.db.models.Users;
  const cfg = app.libs.config;
  const params = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromHeader()
  };

  const strategy = new Strategy(params, (payload, done) => {
    Users.findById(payload.id)
         .then((user) => {
           if(user){
             return done(null, {
                id: user.email,
                email: user.email
             });
           }
           return done(null, false);
         })
         .catch((error) => {
           return done(null, error)
         });
  });

  passport.use(strategy);

  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate('jwt', cfg.jwtSession);
    }
  };

};
