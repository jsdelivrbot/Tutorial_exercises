/* BASIC SERVER TO SERVE CSV AND JSON
===================================*/

const express = require('express'),
      fs = require('fs'),
      path = require('path'),
      app = express();

//Allow corrs request
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  next();
})

//Send test numbers back
app.get('/testNumbers', (req,res) => {
  var barChatNumbers = [20,12,8,8,27,12,28,32];
  res.send(barChatNumbers);
});

//Send CSV of scores
app.get('/cities', (req,res) => {
  fs.readFile('./data/scores.csv', 'utf8' , (err,data) => {
    if(err){
      return res.send(err);
    }
    res.send(data);
  });
});


app.listen(process.env.PORT || 3000, () => {
  console.log('server up and running');
})
