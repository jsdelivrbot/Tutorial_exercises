/*******************
* Task routes
*********************/

module.exports = app => {

  //load model tasks from the db module
  const Tasks = app.db.models.Tasks;

  //
  // Retrieve tasks held in the sqlite db
  //
  app.get('/tasks', (req,res) => {

    Tasks.findAll({}).then( tasks => {
      res.json({
        tasks: tasks
      });
    });

  });

}
