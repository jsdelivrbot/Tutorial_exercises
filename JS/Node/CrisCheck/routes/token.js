//
// Generate encoded tokens
//

import jwt from 'jwt-simple';

module.exports = app => {

  const cfg = app.libs.config;
  const Users = app.db.models.Users;

  app.post('/token', (req,res) => {

    if(req.body.email && req.body.password)
    {
      const { email, password } = req.body;
      //
      // Find user by email and check password matches, return token if
      // successful else return unauthorized status.
      //
      Users.findOne({ where: { email: email } })
           .then((user) => {
             if(Users.isPassword(user.password, password))
             {
               const payload = { id: user.id };
               res.json({
                 token: jwt.encode(payload, cfg.jwtSecret)
               })
             }
             else
             {
               res.status(401);
             }
           })
           .catch((error) => {
             return res.sendStatus(401);
           });
    }
    else
    {
      res.sendStatus(401);
    }
  }); //end of post


}//end of module
