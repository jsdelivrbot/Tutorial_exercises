//
// General application routes
//

module.exports = app => {

  const Users = app.db.models.Users;

  app.get('/users/:id', (req,res) => {
    Users.findById(req.params.id, {
      attributes: ["id", "name", "email"]
    })
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      return res.status(412).json({ msg: error.message })
    });
  });

  app.delete('/users/:id', (req,res) => {
    Users.destroy({ where: { id: req.params.id } })
         .then((result) => {
           return res.json(result);
         })
         .catch((error) => {
           return res.status(412).json({ msg: error.message })
         });
  });

  app.post('/users', (req,res) => {
    Users.create(req.body)
         .then((result) => {
           return res.json(result);
         })
         .catch((error) => {
           return res.status(412).json({ msg: error.message })
         });
  });


}
