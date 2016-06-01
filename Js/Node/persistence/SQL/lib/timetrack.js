var qs = require('querystring');

exports.sendHTML = function(res,html){
     res.setHeader('Content-Type':'text/html');
     res.setHeader('Content-Length': Buffer.byteLength(html));
     res.end(html);
}

exports.parseReceivedData = function(req,cb){
     var body = '';
     req.setEncoding('utf8');
     req.on('data',function(chunk){
          body += chunk;
     });
     req.on('end', function(){
          var data = qs.parse(body);
          cb(data);
     });
}

exports.actionForm = function(id,path,label){
     
}
