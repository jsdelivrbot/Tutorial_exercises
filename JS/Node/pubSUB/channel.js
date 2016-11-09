var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subs = {};

channel.on('test',function(){
     console.log('the emit and on seem to be working');
});

channel.on('join',function(id,client){
     console.log('in the onJoin');
     this.clients[id] = id;
     this.subs[id] = function(senderId, message){
          if(id != senderId){
               this.clients[id].write(message);
          }
     }
     this.on('broadcast', this.subs[id]);
});


var server = net.createServer(function(client){
     var id = client.remoteAddress + ':' + client.remotePort;
     console.log('Conncted to the server - client info = ' + client.remoteAddress + ':' + client.remotePort );
     console.log('the client variable is also ' + client);

     client.on('connect', function(){
          channel.emit('join', id, client);
          console.log('in onConnect');
     });



     client.on('data', function(data){
          channel.emit('test');
          data  = data.toString();
          channel.emit('broadcast', id, data );
     });
});

server.listen(4000);
