/*******************
* Task routes
*********************/

module.exports = app => {

  //load Task model up --> See bottom
  const Tasks = app.models.tasks;

  //Return list of tasks
  app.get('/tasks', (req,res) => {
    Tasks.findAll({}, (tasks) => {
      res.json({
        tasks: tasks
      })
    });
  })



}

/*
 Notes:

  1. All modules pulled in via consign are avaialble in the app variables



*/
