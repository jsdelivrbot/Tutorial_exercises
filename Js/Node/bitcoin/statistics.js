var fs = require('fs');
var https = require('https');
var path = require('path');
var file = path.join(process.cwd(), '/.data');
require('dns-notfound-what');


//Set the url options
var options = {
     host: 'api.bitcoinaverage.com',
     path: '/ticker/global/GBP'
};

callback = function(req,res){
     var str = '';
     res.on('data',function(chunk){
          str += chunk;
     });

     var backTo = JSON.parse(str);

     res.on('end',function(){
          console.log(str);
     });
}

https.request(options,callback).on('error',function(err){
     console.log(err.message);
}).end();
