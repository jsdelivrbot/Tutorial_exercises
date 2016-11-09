var http = require('http');
var url = require('url');
var items = [];


var server = http.createServer(function(req,res){

     switch(req.method){
          case 'POST':
               var item = '';
               req.setEncoding('utf-8');
               req.on('data',function(data){
                    item += data;
               });
               req.on('end',function(){
                    items.push(item);
                    res.end('OK\n');
               });
               break;
          case 'GET':
               var body = items.forEach(function(item,i){
                    return i + ')' + item;
                    }).join('\n');
               res.setHeader('Content-Type','text/plain');
               res.setHeader('Content-Length',Buffer.bytelength(body));
               res.end(body);
               break;
          case 'DELETE':
               var path = url.parse(req.url).pathname;
               var i = parseInt(path.slice(1), 10);
               if(isNAN(i)){
                    res.statusCode = 400;
                    res.end('Invalid Item Id');
               }else if(!(items[i])){
                    res.statusCode = 404;
                    res.end('Invalid item');
               } else{
                    items.splice(i,1);
                    res.end('OK\n');
               }
               break;
          case 'PUT':
               var path = url.parse(req.url).pathname;
               var i = parseInt(path.slice(1),10);
               var updated = url.parse(req.url).query;
               if(isNAN(i)){
                    res.statusCode = 400;
                    res.end('Invalid Item Id');
               }else if(!(items[i])){
                    res.statusCode = 404;
                    res.end('Invalid item');
               } else{
                    items = items.splice(items[i],1,updated);
                    res.end('OK\n');
               }




     }

});
server.listen(3200);
