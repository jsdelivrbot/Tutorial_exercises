var connect = require('connect');

var app = connect()
     .use(logger(':method: url'));
     .use(hello); 
