/*******************
* Task routes
*********************/

module.exports = app => {

  //load model tasks from the db module
  const Tasks = app.db.models.Tasks;

  //
  // Generic task routes
  //
  app.route('/tasks').all((req,res, next) => {
    delete req.body.id;
    app.auth.authenticate();
    next();
  })
  // return all tasks held in the db
  .get((req,res) => {
    Tasks.findAll({
          where: { user_id: req.user.id }
         })
         .then((result) => {
           return res.json(result);
         })
         .catch((error) => {
           return res.status(412).json({ msg: error.message });
         });
  })
  // Add task to the db and return result
  .post((req,res) => {
    req.body.user_id = req.user.id;
    Tasks.create(req.body)
         .then((result) => {
           return res.json(result);
         })
         .catch((error) => {
           return res.status(422).json({ msg: error.message });
         });
  });

  //
  // Specific task routes
  //
  app.route('/tasks:id').all((req,res, next) => {
    delete req.body.id;
    app.auth.authenticate();
    next()
  })
  .get((req, res) => {
    Tasks.findOne({
        where: { id: req.params.id, user_id: req.user.id }
         })
         .then((result) => {
           if(result){
             return res.json(result);
           }
           else{
             return res.sendStatus(404);
           }
         })
         .catch((error) => {
           return res.status(412).json({ msg: error.message })
         });
  })
  .put((req,res) => {
    Tasks.update(req.body, {
      where: { id: req.params.id, user_id: req.user.id } 
        })
        .then((result) => {
          return res.sendStatus(204)
        })
        .catch((error) => {
          return res.status(412).json({msg: error.message});
        })
  })
  .delete((req,res) => {
    Task.destroy({where: req.params})
        .then((result) => {
          return res.sendStatus(204);
        })
        .catch((error) => {
          return res.status(412).json({msg: error.message });
        })
  })


}//end of export
