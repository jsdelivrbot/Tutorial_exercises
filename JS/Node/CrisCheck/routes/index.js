//
// General application routes
//

module.exports = app => {

  app.get('/', (req,res) => {
    res.json({
      status: 'yep all working'
    });
  })


}
