var net = require('net');

var server = net.createServer(function(socket){
     socket.on('data',function(data){
          if(data === 'close'){socket.destroy();}
          socket.write(data);
          console.log('Echo command : ' + data);
          console.log(socket.localAddress);
     });
});

server.listen(8888);
