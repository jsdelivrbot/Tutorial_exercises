const log = message => console.log(message);
let x = 0;

//Create the child process and dummy server
const childServer = require('child_process').fork(__dirname + '/childServer.js');
const server = require('net').createServer();

//setup listener for server connection
server.on('connection', (socket) => {
	log(`[${++x}] - Socket is ${socket}`);
	socket.end('Parent handled connection');
})

//setup listener and get child to handle overload
server.listen(8165, ()=> {
	childServer.send('Parent message', server);
})
