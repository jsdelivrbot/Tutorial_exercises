var http = require('http');
var formidable = require('formidable');

var server = http.createServer(function(req,res){
     switch(req.method){
          case 'GET':
               show(req,res);
               break;
          case 'POST':
               upload(req,res);
               break;
     }
}).listen(3600);

//show uploads function
//show function
function show(req,res){
     var html = ''
               + '<form method="post" action="/" enctype="multipart/form-data">'
               + '<p><input type="text" name="name"/></p>'
               + '<p><input type="file" name="file" /></p>'
               + '<p><input type="submit" value="Upload" /></p>'
               + '<progress value="10" max="100"></progress>'
               + '</form>';
     res.setHeader('Content-Type', 'text/html');
     res.setHeader('Content-Length', Buffer.byteLength(html));
     res.end(html);
}

function isFormData(req){
     var type = req.headers['content-type'] || '';
     return 0 == type.indexOf('multipart/form-data');
}

function upload(req,res){
     //respond to request when form does not contain correct data
     if(!isFormData(req)){
          res.statusCode == 400;
          res.end('Bad Request : Wrong file format');
          return;
     }
     var form = new formidable.IncomingForm();
     form.parse(req, function(err,fields,files){
          console.log(fields);
          console.log('Start of files:\n',files);
          res.end('Upload comeplete');
     });
     //adding a progress bar on uploads
     form.on('progress',function(rec,ex){
          var percent = Math.floor(rec / ex * 100);
          console.log(percent + 'uploaded');
     });
}



/* longer method with seperate declartions
function upload(req,res){
     //respond to request when form does not contain correct data
     if(!isFormData(req)){
          res.statusCode == 400;
          res.end('Bad Request : Wrong file format');
          return;
     }
     var form = new formidable.IncomingForm();
     form.on('field',function(field,value){
          console.log(field);
          console.log(value);
     });
     form.on('file',function(name,file){
          console.log(name);
          console.log(file);
     });
     form.on('end',function(){
          res.end('Upload complete');
     });
     form.parse(req);
}
*/
