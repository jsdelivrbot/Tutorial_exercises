//
// Sync database and run app to listen on port 8000
//

module.exports = app => {
  app.db.sequelize.sync().done(()=>{
    app.listen(3000, ()=> {
      console.log(`Up and running on ${app.get('PORT')}`);
    });
  });
}
