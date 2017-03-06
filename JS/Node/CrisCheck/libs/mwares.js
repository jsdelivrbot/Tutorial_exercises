//
// Application middlewares
//
import bodyParser from 'body-parser';

module.exports = app => {
  app.set('PORT', 3000);
  app.use(bodyParser.json());
}
