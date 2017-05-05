const log = message => console.log(message);

//Create the child process
const cp = require('child_process');
const child = cp.fork(__dirname + '/child.js');


//Setup emitter to receive bradcasts from the child process
child.on('message', (msg) => log(`Child says ${msg}`));
