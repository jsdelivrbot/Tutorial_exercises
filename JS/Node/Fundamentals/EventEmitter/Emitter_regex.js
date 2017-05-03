const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const print = message => console.log(message);


function findPattern(files,regex){
	var emitter = new EventEmitter();
	files.forEach((file) => {
		fs.readFile(file, 'utf8', (err,content) => {
			if(err){
				return emitter.emit('error', err);
			}
			emitter.emit('Fileread', filename);
			let match = null;
			if(match = content.match(regex)){
				match.forEach((elem) => emitter.emit('Found', elem))
			}
		})
	})
	return emitter;
}

function dateAndCoords(date, coords){
	var emitter = new EventEmitter();
	setTimeout(()=> {
		emitter.emit('simple', date)
	},2000);
	setTimeout(() => {
		emitter.emit('complex', {
			coords: coords,
			names: ['charlie','jack']
		})
	},3000)
	return emitter;
}

//Test
dateAndCoords('2017-3', '12342')
			.on('simple', (data) => print(data) )
			.on('complex', (data) => {
				data.names.forEach((name) => print(name))
			})
