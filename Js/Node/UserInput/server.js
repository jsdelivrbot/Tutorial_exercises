var http = require('http');
var qs = require('querystring');
var items = [];

var server = http.createServer(function(req,res){
     if('/' == req.url){
          switch(req.method){
               case 'GET':
                    show(res);
                    break;
               case 'POST':
                    add(req,res);
                    break;
               case 'DELETE':
                    del(req,res);
                    break;
               default:
                    badRequest(res);
          }
     } else {
          notFound(res);
     }
});

server.listen(3500);

/*
function del(req,res){
     items.splice()
}
*/

//add function
function add(req,res){
     var body = '';
     req.setEncoding('utf-8');
     req.on('data',function(chunk){body += chunk});
     req.on('end',function(){
          var obj = qs.parse(body);
          items.push(obj.item);
          show(res);
     });
}

//show function
function show(res){
     var html = '<html><head><title>Todo</title></head><body>'
               + '<h1> Todo </h1>'
               + '<ul>'
               + items.map(function(item){
                    return '<li>' + item + '</li>'
               }).join('')
               + '</ul>'
               + '<form method="post" action="/">'
               + '<p><input type="text" name="item"/></p>'
               + '<p><input type="submit" value="addItem" /></p>'
               + '</form></body></html>';
     res.setHeader('Content-Type', 'text/html');
     res.setHeader('Content-Length', Buffer.byteLength(html));
     res.end(html);
}

//404 not founf
function notFound(res){
     res.statusCode = 404;
     res.setHeader('Content-Type' , 'text/plain');
     res.end('Not found');
}

//bad request
function badRequest(res){
     res.statusCode = 400;
     res.setHeader('Content-Type' , 'text/plain');
     res.end('Bad Request');
}
