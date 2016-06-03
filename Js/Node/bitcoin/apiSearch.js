var fs = require('fs');
var https = require('https');
var path = require('path');
var file = path.join(process.cwd(), '/.data');
var db = require('./priv_modules/mongCommand.js');
var list = [];
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/mydb';

https.get('https://api.bitcoinaverage.com/ticker/global/GBP/',(res)=> {
     var str = '';

     res.on('data', (d) => {
          str += d;
     });

     res.on('end', ()=>{
          MongoClient.connect(url,(err,db)=>{
               if(err){
                    console.log('error' + err);
               }
               else{
                    console.log('success');
                    var collection = db.collection('BTC');
                    collection.insert(JSON.parse(str));

               }
          })
     });

}).on('error',(e)=>{
     console.error(e);
});


setTimeout(function(){
     console.log(list)
},5000);
