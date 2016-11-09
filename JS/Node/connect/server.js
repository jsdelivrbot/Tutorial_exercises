var connect = require('connect');

function logger(req,res,next){
     console.log('%s %s', req.method, req.url)
     next();
}

function hello(req,res,next){
     res.setHeader('Content-Type', 'text/plain');
     res.end('Hello There');
}

function restrict(req,res,next){
     var auth = req.headers.authorization;
     if(!auth){
          return next(new Error('Unauthorized access'));
     }
     var parts = auth.split(' ');
     var scheme = parts[0];
     var auth2 = new Buffer(parts[1], 'base-64').toString().split(':');
     var user = auth[0];
     var pass = auth[1];
}

var app = connect();
app.use(logger);
app.use(hello);
app.listen(3000);
