module.exports = app => {
  app.db.sync().done(()=>{
    app.listen(8000, ()=> {
      console.log(`Up and running on ${app.get('PORT')}`);
    });
  });
}
