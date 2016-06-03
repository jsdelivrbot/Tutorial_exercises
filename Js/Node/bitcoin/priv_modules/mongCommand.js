module.exports = {


     setup: ()=>{
          var mongodb = require('mongodb');
          var MongoClient = mongodb.MongoClient;
          var url = 'mongodb://localhost:27017/mydb';
          MongoClient.connect(url,(err,db)=>{
               if(err){
                    console.log('error' + err);
               }
               else{
                    console.log('success');
                    var collection = db.collection('BTC');
                    return collection;
               }
          })
     },

     test: []

};
